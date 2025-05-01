const ApiError = require('../error/ApiError');
const {Message} = require('../models/models')
class MessageController {
    async getAll(req, res, next) {
        try {
            const messages = await Message.findAll();
            return res.json(messages);
        } catch (e) {
            return next(ApiError.internal('Ошибка при получении сообщений'));
        }
    }
    async create(req, res, next) {
        try {
            const { name, email, subject, message, department } = req.body;
            
            // Логируем полученные данные для отладки
            console.log("Received data:", { name, email, subject, message, department });
    
            if (!name || !email || !subject || !message || !department) {
                return next(ApiError.badRequest('Не указаны обязательные поля'));
            }
    
            const newMessage = await Message.create({ 
                name, 
                email, 
                subject, 
                message, 
                department 
            });
    
            return res.json(newMessage);
        } catch (e) {
            // Логируем полную ошибку для отладки
            console.error("Error in MessageController.create:", e);
            return next(ApiError.internal(e.message)); // Возвращаем оригинальное сообщение ошибки
        }
    }
}

module.exports = new MessageController();