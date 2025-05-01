const ApiError = require('../error/ApiError');
const { Product } = require('../models/models');

class ProductController {
    // Получить все продукты (GET /products)
    async getAll(req, res, next) {
        try {
            const products = await Product.findAll();
            return res.json(products);
        } catch (e) {
            return next(ApiError.internal('Ошибка при получении списка продуктов'));
        }
    }

    // Получить один продукт по ID (GET /products/:id)
    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const product = await Product.findOne({ where: { id } });

            if (!product) {
                return next(ApiError.notFound('Продукт не найден'));
            }

            return res.json(product);
        } catch (e) {
            return next(ApiError.internal('Ошибка при получении продукта'));
        }
    }

    // Создать новый продукт (POST /products)
    async create(req, res, next) {
        try {
            const {
                imageUrl,
                title,
                price,
                description,
                systemRequirements,
                characteristics,
            } = req.body;

            if (!imageUrl || !title || !price) {
                return next(ApiError.badRequest('Не указаны обязательные поля (imageUrl, title, price)'));
            }

            const product = await Product.create({
                imageUrl,
                title,
                price,
                description,
                systemRequirements,
                characteristics,
            });

            return res.json(product);
        } catch (e) {
            return next(ApiError.internal('Ошибка при создании продукта'));
        }
    }

    // Обновить продукт по ID (PUT /products/:id)
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const {
                imageUrl,
                title,
                price,
                description,
                systemRequirements,
                characteristics,
            } = req.body;

            const product = await Product.findOne({ where: { id } });

            if (!product) {
                return next(ApiError.notFound('Продукт не найден'));
            }

            await product.update({
                imageUrl: imageUrl || product.imageUrl,
                title: title || product.title,
                price: price || product.price,
                description: description || product.description,
                systemRequirements: systemRequirements || product.systemRequirements,
                characteristics: characteristics || product.characteristics,
            });

            return res.json(product);
        } catch (e) {
            return next(ApiError.internal('Ошибка при обновлении продукта'));
        }
    }

    // Удалить продукт по ID (DELETE /products/:id)
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const product = await Product.findOne({ where: { id } });

            if (!product) {
                return next(ApiError.notFound('Продукт не найден'));
            }

            await product.destroy();
            return res.json({ message: 'Продукт успешно удален' });
        } catch (e) {
            return next(ApiError.internal('Ошибка при удалении продукта'));
        }
    }
}

module.exports = new ProductController();