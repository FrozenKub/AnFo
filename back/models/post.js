'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class post extends Model {
        static associate(models) {
        }
    };
    post.init({
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        content: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'post',
    });
    return post;
};