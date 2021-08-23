const Connection = require("mysql2/typings/mysql/lib/Connection");
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const Post = require("../models/Post");

const conection = 
    new Sequelize(dbConfig.url, dbConfig.config);

Post.init(Connection);

module.exports = conection;