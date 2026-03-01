const express = require("express");
const cors = require("cors");
const { corsOptions } = require("./utils");
const app = express();



// middlewares
app.use(cors(corsOptions))
app.use(express.json());



// routes
app.get("/", (req, res) => {
    res.status(200).json("Hello, World!");
})


module.exports = app;