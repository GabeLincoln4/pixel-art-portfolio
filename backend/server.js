const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

const mongoURI = "mongodb+srv://admin-gabriel:xiqW75HDDMmoRhiK@cluster0.n51sy.mongodb.net/pixelArtSiteDB?retryWrites=true&w=majority";
mongoose.connect(mongoURI);

app.listen(
    5000, 
    () => {
        console.log("Server running on port 5000");
    }
)