const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/fast_shopping');

module.exports = db;


/**** Mysql config: ****/

//1st Trial

// const dbConfig = require('../config/db.config')
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     operatorAliases: false,
//     pool: {
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle
//     }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.models = require('../models/index')(sequelize, Sequelize)

// module.exports = db
// db.Sequelize.global = Sequelize



// 2nd Trial

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("rosana", "root", "", {
//   host: "127.0.0.1",
//   dialect: "mysql",
//   operatorsAliases: false
// });

// module.exports = sequelize;
// global.sequelize = sequelize;