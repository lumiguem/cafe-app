const {DataTypes} = require ("sequelize");
const {db} = require ("../database/config");

const Product = db.define("products", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING (30),
        allowNull: false,
        unique: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    isNew: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
});

module.exports = Product;
