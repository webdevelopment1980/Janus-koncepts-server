require('dotenv').config();
const cors = require("cors");
const express = require('express');
const app = express();
const query = require("./routes/query.routes")
const { Collection, default: mongoose } = require('mongoose');
const PORT = process.env.PORT || 3090
const MONGO_URL = process.env.MONGO_URL
const logger = require("./helper/logger")
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send(`Welcome To Janus koncepts Server managed by Prateek Takthar`);
});

app.use("/api/query", query)

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Database connected succesfully :)");
        app.listen(PORT, (err) => {
            if (err) console.log(err.message)
            console.log('app is running on port', PORT)
        })
    }).catch((error) => {
        console.log("error while connecting to the database ", error);
    })

logger.info('The application is active');
