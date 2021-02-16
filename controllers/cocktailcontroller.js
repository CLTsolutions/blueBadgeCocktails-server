let express = require('express')
let router = express.Router()
const Cocktail = require('../db').import('../models/cocktail')

/************************
    * RECIPE CREATE *
*************************/
router.post('/', (req, res) => {
    const cocktailEntry = {
        name: req.body.cocktail.name,
        alcoholic: req.body.cocktail.alcoholic,
        glassType: req.body.cocktail.glassType,
        ingredients: req.body.cocktail.ingredients,
        instructions: req.body.cocktail.instructions,
        iced: req.body.cocktail.iced,
        shaken: req.body.cocktail.shaken,
        stirred: req.body.cocktail.stirred
    }
    Cocktail.create(cocktailEntry)
        .then(logs => res.status(200).json(logs))
        .catch(err => res.status(500).json({ error: err }))
})

/*******************************
  * GET ALL COCKTAILS BY USER *
********************************/
router.get("/", (req, res) => {
    Log.findAll({ where: { owner_id: req.user.id } })
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({ error: err }))
});

/*******************************
   * UPDATE COCKTAIL RECIPE *
********************************/

/*************************
    * DELETE COCKTAIL *
**************************/
router.delete("/:id", (req, res) => {
    Cocktail.destroy({ where: {id: req.params.id}})
    .then((result) => {
        if (result) {
            return res.status(200).json({ message: `Successfully deleted ${result}`})
        }

        res.json({message: "Couldn't find specified cocktail to delete"})
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
})


module.exports = router