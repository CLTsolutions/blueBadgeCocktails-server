let express = require('express')
let router = express.Router()

/************************
    * RECIPE CREATE *
*************************/
router.get('/create', (req, res) => {
    res.send('This is a server message')
})

/*******************************
  * GET ALL COCKTAILS BY USER *
********************************/
router.post('/', (req, res) => {
    res.send('This is the simple/post route')
})

/*******************************
   * UPDATE COCKTAIL RECIPE *
********************************/

/*************************
    * DELETE COCKTAIL *
**************************/



module.exports = router