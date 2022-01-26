const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

//deal with json data
app.use(express.json());

const mongoURI = "mongodb+srv://admin-gabriel:xiqW75HDDMmoRhiK@cluster0.n51sy.mongodb.net/pixelArtSiteDB?retryWrites=true&w=majority";
mongoose.connect(mongoURI);

app.use("/", require("./routes/characterRoute.js"));

app.listen(
    5000, 
    () => {
        console.log("Server running on port 5000");
    }
)