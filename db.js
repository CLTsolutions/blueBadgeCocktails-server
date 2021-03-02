const Sequelize = require('sequelize')

const sequelize = new Sequelize (
    'blue-badge-cocktails',
    'postgres',
    'password', {
        host: 'localhost',
        dialect: 'postgres',
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