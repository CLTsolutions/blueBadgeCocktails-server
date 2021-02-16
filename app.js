let express = require('express')
let app = express()
let sequelize = require('./db')
let cocktail = require('./controllers/cocktailcontroller')
let user = require('./controllers/usercontroller')

sequelize.sync()

app.use(express.json())

app.use('/bartender', user)

//will be protected route
app.use('/mybar', cocktail)

app.listen(3000, () => {
    console.log('App is running on 3000');
})