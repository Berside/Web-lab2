const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    Name: { type: DataTypes.STRING, unique: true, allowNull: false },
    Number: { type: DataTypes.STRING, unique: true, allowNull: false },
});

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
    version: { type: DataTypes.STRING },
    platforms: { type: DataTypes.STRING },
    license: { type: DataTypes.STRING },
    cloudStorage: { type: DataTypes.STRING },
    
    features: { type: DataTypes.JSON }, 
    technologies: { type: DataTypes.JSON }, 
    advantages: { type: DataTypes.JSON }, 
    protectionStats: { type: DataTypes.JSON },
    
    awards: { type: DataTypes.TEXT }
});

const Review = sequelize.define('review', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
    text: { type: DataTypes.TEXT },
});

const Message = sequelize.define('message', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    subject: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false },
    department: { type: DataTypes.STRING, allowNull: false },
});

const Content = sequelize.define('content', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    http: { type: DataTypes.TEXT },
});

const Cart = sequelize.define('cart', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        defaultValue: 1,
        validate: {
            min: 1
        }
    },
});


User.belongsToMany(Tovar, { 
  through: Cart,
  foreignKey: 'userId',
  as: 'tovars' 
});

Tovar.belongsToMany(User, {
  through: Cart,
  foreignKey: 'tovarId',
  as: 'users'
});

Cart.belongsTo(Tovar, {
  foreignKey: 'tovarId',
  as: 'tovar'
});

Cart.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
    User,
    Product,
    Review,
    Message,
    Content,
    Tovar,
    Cart
};