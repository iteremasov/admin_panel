const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/../db/database.sqlite'
});

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Article = sequelize.define('Article', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.BLOB
    }
})

const Category = sequelize.define('Category', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    parent_id: {
        type: DataTypes.STRING
    }
})
User.hasMany(Article)
User.hasMany(Category)
Article.belongsTo(User)
Article.belongsTo(Category)
Category.hasMany(Article)
Category.belongsTo(User)

module.exports = {User, Article, Category, sequelize}
