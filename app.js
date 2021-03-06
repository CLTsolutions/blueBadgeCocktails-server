require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
const sequelize = require('./db')

const user = require('./controllers/usercontroller')
const cocktail = require('./controllers/cocktailcontroller')

sequelize.sync()

app.use(cors())
app.use(require("./middleware/headers"));
app.use(express.json())

app.use('/bartender', user)

app.use('/mybar', cocktail)

app.listen(process.env.PORT, () => {
    console.log(`App is running on ${process.env.PORT}`);
})