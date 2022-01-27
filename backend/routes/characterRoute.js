const express = require('express');
const router = express.Router();
const Character = require('../models/characterModel');

router.route("/retrievepixelartcard").get((req, res) => {
    Character.find()
             .then(foundPixelCards => res.json(foundPixelCards))
});

router.route("/createpixelartcard").post((req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;


    const newCharacter = new Character({
        name,
        image,
        description
    });

    newCharacter.save();
});

module.exports = router;