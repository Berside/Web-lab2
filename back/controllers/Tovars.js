const ApiError = require('../error/ApiError');
const {Tovar} = require('../models/models')
class TovarsController {
    async getAll(req, res, next) {
        try {
            const reviews = await Tovar.findAll();
            return res.json(reviews);
        } catch (e) {
            return next(ApiError.internal('Ошибка при получении отзывов'));
        }
    }
}

module.exports = new TovarsController();