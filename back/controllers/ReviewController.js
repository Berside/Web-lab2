const ApiError = require('../error/ApiError');
const {Review} = require('../models/models')
class ReviewController {
    async getAll(req, res, next) {
        try {
            const reviews = await Review.findAll();
            return res.json(reviews);
        } catch (e) {
            return next(ApiError.internal('Ошибка при получении отзывов'));
        }
    }
    async create(req, res, next) {
        try {
            const { name, email, rating, text } = req.body;
            const review = await Review.create({ 
                name, 
                email, 
                rating, 
                text 
            });
            return res.json(review);
        } catch (e) {
            return next(ApiError.internal('Ошибка при создании отзыва'));
        }
    }
}

module.exports = new ReviewController();