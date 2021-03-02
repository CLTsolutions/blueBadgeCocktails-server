const express = require('express')
const app = express()
const sequelize = require('./db')
app.use(express.json())

const user = require('./controllers/usercontroller')
const cocktail = require('./controllers/cocktailcontroller')

sequelize.sync()
//sequelize.sync({force:true}) - THIS RESETS DB
app.use(cors())
app.use(require("./middleware/headers"));
app.use(express.json())

app.use('/bartender', user)

app.use(require("./middleware/validate-session"));
app.use('/mybar', cocktail)

app.listen(3000, () => {
    console.log('App is running on 3000');
})