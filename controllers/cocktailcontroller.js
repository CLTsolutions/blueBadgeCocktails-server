const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const Cocktail = require('../db').import('../models/cocktail');

/************************
    * RECIPE CREATE *
*************************/
//change route and user id req once ready for validation
router.post('/',validateSession, ( req, res) => {
    const cocktailEntry = {
        name: req.body.name,
        alcoholic: req.body.alcoholic,
        glassType: req.body.glassType,
        ingredients: req.body.ingredients,
        measurements: req.body.measurements,
        instructions: req.body.instructions,
        iced: req.body.iced,
        shaken: req.body.shaken,
        stirred: req.body.stirred,
        userId: req.user.id,
    }
    Cocktail.create(cocktailEntry)
        .then(logs => res.status(200).json(logs))
        .catch(err => res.status(500).json({ error: err }))
})

/*******************************
  * GET ALL COCKTAILS BY USER *
********************************/
router.get("/", validateSession, (req, res) => {
    Cocktail.findAll({ where: { userId: req.user.id } })
        .then((cocktails) => {
            if (cocktails.length === 0)
                return res.status(200).json({ message: "No cocktails were found! Try creating one." });
            res.status(200).json({ cocktails });
    })
    .catch((error) => {
        res.status(500).json({ error });
    });
});

/*******************************
  * SEARCH COCKTAILS BY NAME *
********************************/
router.get("/cocktails/:name", (req, res) => {
    Cocktail.findAll({ where: { name: req.params.name } })
        .then((cocktails) => {
            if (cocktails.length === 0)
                return res.status(200).json({ message: "No cocktails were found! Try creating one." });
            res.status(200).json({ cocktails });
    })
    .catch((error) => {
        res.status(500).json({ error });
    });
});

/*******************************
   * UPDATE COCKTAIL RECIPE *
********************************/
router.put("/:id", validateSession, (req, res) => {
    Cocktail.update(req.body, {
        where: { id: req.params.id },
    })
        .then((response) => {
            res.status(200).json({ message: "Your cocktail has been updated.", response });
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

/*************************
    * DELETE COCKTAIL *
**************************/
//add second where 'userId: req.user.id' once we add validate session
router.delete("/:id", validateSession, (req, res) => {
    Cocktail.destroy({ where: { id: req.params.id } })
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