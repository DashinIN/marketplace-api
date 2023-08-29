const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.POSTGRES_HOST, 
    }
)
