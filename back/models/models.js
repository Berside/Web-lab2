const sequelize = require('../db')
const {DataTypes} = require('sequelize')

// Пользователи
const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    Name: { type: DataTypes.STRING, unique: true, allowNull: false },
    Number: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Продукты
const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    imageUrl: { type: DataTypes.TEXT, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    description: { type: DataTypes.TEXT },
    systemRequirements: { type: DataTypes.TEXT },
    characteristics: { type: DataTypes.TEXT },
});

const Tovar = sequelize.define('tovar', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    oldPrice: { type: DataTypes.DECIMAL(10, 2) },
    discount: { type: DataTypes.INTEGER },
    shortDescription: { type: DataTypes.TEXT },
    fullDescription: { type: DataTypes.TEXT },
    mainImageUrl: { type: DataTypes.TEXT, allowNull: false },
    
    // Характеристики
    version: { type: DataTypes.STRING },
    platforms: { type: DataTypes.STRING },
    license: { type: DataTypes.STRING },
    cloudStorage: { type: DataTypes.STRING },
    
    // Особенности продукта в JSON
    features: { type: DataTypes.JSON }, // ["Антивирус", "Файервол", "VPN"...]
    technologies: { type: DataTypes.JSON }, // ["ИИ-анализ поведения", "песочница"...]
    advantages: { type: DataTypes.JSON }, // [{title: "...", description: "..."}, ...]
    protectionStats: { type: DataTypes.JSON }, // ["100% обнаружение...", ...]
    
    // Награды
    awards: { type: DataTypes.TEXT }
});

// Отзывы
const Review = sequelize.define('review', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
    text: { type: DataTypes.TEXT },
});

// Сообщения
const Message = sequelize.define('message', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    subject: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false },
    department: { type: DataTypes.STRING, allowNull: false },
});

// Контент (ваша существующая модель)
const Content = sequelize.define('content', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    http: { type: DataTypes.TEXT },
});

// Связи между моделями (если нужны)
Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
    User,
    Product,
    Review,
    Message,
    Content,
    Tovar
};