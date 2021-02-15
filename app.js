let express = require('express')
let app = express()
let sequelize = require('./db')
let bar = require('./controllers/barcontroller')
let user = require('./controllers/usercontroller')

sequelize.sync()

app.use(express.json())

app.use('/bartender', user)

//will be protected route
app.use('/bar', bar)

app.listen(3000, () => {
    console.log('App is running on 3000');
})