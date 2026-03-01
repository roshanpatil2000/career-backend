const express = require("express");

const app = express();

// middlewares
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.status(200).json("Hello, World!");
})


module.exports = app;