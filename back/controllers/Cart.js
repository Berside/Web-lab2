const ApiError = require('../error/ApiError');
const {Cart, Tovar, User} = require('../models/models');

class CartController {
    async add(req, res, next) {
        try {
            const {userId, tovarId, quantity = 1} = req.body;
            const user = await User.findByPk(userId);
            const tovar = await Tovar.findByPk(tovarId);
            
            if (!user || !tovar) {
                return next(ApiError.badRequest('Пользователь или товар не найдены'));
            }
            let cartItem = await Cart.findOne({where: {userId, tovarId}});
            
            if (cartItem) {
                cartItem.quantity += quantity;
                await cartItem.save();
            } else {
                cartItem = await Cart.create({userId, tovarId, quantity});
            }
            
            return res.json(cartItem);
        } catch (e) {
            return next(ApiError.internal('Ошибка при добавлении в корзину'));
        }
    }

async getUserCart(req, res, next) {
    try {
        const { userId } = req.params;
        const cartItems = await Cart.findAll({
            where: { userId },
            include: [{
                model: Tovar,
                as: 'tovar',
                attributes: ['id', 'title', 'price', 'mainImageUrl'] 
            }]
        });

        if (!cartItems || cartItems.length === 0) {
            return res.json([]);
        }
        const items = cartItems.map(item => ({
            ...item.tovar.get({ plain: true }),
            quantity: item.quantity,
            cartId: item.id
        }));

        return res.json(items);

    } catch (e) {
        console.error('Ошибка при получении корзины:', e);
        return next(ApiError.internal('Ошибка при получении корзины'));
    }
}
    async updateQuantity(req, res, next) {
        try {
            const {userId, tovarId} = req.params;
            const {quantity} = req.body;
            
            if (quantity < 1) {
                return next(ApiError.badRequest('Количество не может быть меньше 1'));
            }
            
            const cartItem = await Cart.findOne({where: {userId, tovarId}});
            
            if (!cartItem) {
                return next(ApiError.notFound('Товар не найден в корзине'));
            }
            
            cartItem.quantity = quantity;
            await cartItem.save();
            
            return res.json(cartItem);
        } catch (e) {
            return next(ApiError.internal('Ошибка при обновлении количества'));
        }
    }
    async remove(req, res, next) {
        try {
            const {userId, tovarId} = req.params;
            
            const cartItem = await Cart.findOne({where: {userId, tovarId}});
            
            if (!cartItem) {
                return next(ApiError.notFound('Товар не найден в корзине'));
            }
            
            await cartItem.destroy();
            
            return res.json({message: 'Товар успешно удален из корзины'});
        } catch (e) {
            return next(ApiError.internal('Ошибка при удалении из корзины'));
        }
    }
    async clear(req, res, next) {
        try {
            const {userId} = req.params;
            
            await Cart.destroy({where: {userId}});
            
            return res.json({message: 'Корзина успешно очищена'});
        } catch (e) {
            return next(ApiError.internal('Ошибка при очистке корзины'));
        }
    }
}

module.exports = new CartController();