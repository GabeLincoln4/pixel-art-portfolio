const mongoose = require('mongoose');

const charactersSchema = {
    name: String,
    image: String,
    description: String
};

const Character = mongoose.model("Character", charactersSchema);

module.exports = Character;