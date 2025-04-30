const { Content } = require('../models/models');
const ApiError = require('../error/ApiError');

class ContentController {
    async getAll(req, res, next) {
        try {
            const contents = await Content.findAll();
            return res.json(contents); // Отправляем данные клиенту
        } catch (error) {
            console.error('Error fetching all contents:', error);
            return next(ApiError.internal('Произошла ошибка при получении данных')); // Используем обработчик ошибок
        }
    }
}

module.exports = new ContentController();