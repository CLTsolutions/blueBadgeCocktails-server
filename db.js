const Sequelize = require('sequelize')

const sequelize = new Sequelize (
    'express-demo',
    'postgres',
    'password', {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    }
)

sequelize.authenticate()
    .then(() => {
        console.log('Connection to the Database express-demo');
    })
    .catch((err) => {
        console.log(err);
    })

module.exports =sequelize