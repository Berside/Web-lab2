const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Favorite} = require('../models/models')

const generateJwt = (id, login, role) => {
    return jwt.sign(
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {login, password, Name, Numberr, role} = req.body
        if (!login || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {login}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({login, role, password: hashPassword, Name, Number: Numberr})
        const favorite = await Favorite.create({userId: user.id})
        const token = generateJwt(user.id, user.login, user.role)
        return [res.json({token}), user.id]
    }

    async login(req, res, next) {
        const {login, password} = req.body
        const user = await User.findOne({where: {login}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.login, user.role)
        return [res.json({token}), user.id]
    }

    async check(req, res, next) {
        try {
            if (!req.user || !req.user.id) {
                return next(ApiError.unauthorized())
            }
            
            const token = generateJwt(req.user.id, req.user.email, req.user.role)
            return res.json({
                token,
                userId: req.user.id
            })
        } catch (error) {
            next(error)
        }
    }
      async getUserIdByEmail(req, res, next) {
        try {
            const {email} = req.query; 
            
            if (!email) {
                return next(ApiError.badRequest('Email не указан'));
            }
            
            const user = await User.findOne({
                where: {login: email},
                attributes: ['id'] 
            });
            
            if (!user) {
                return next(ApiError.notFound('Пользователь с таким email не найден'));
            }
            
            return res.json({userId: user.id});
        } catch (e) {
            return next(ApiError.internal('Ошибка при поиске пользователя'));
        }
    }

}

module.exports = new UserController()