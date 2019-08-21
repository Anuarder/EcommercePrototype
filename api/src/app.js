const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config/config");
const mongoose = require("mongoose");

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json());

const productsRouter = require("./routers/products")

app.use(productsRouter);

app.get("/", (req, res) => {
    res.send({status: "all work"})
})

mongoose.connect(config.database_url, { useNewUrlParser: true }, err => {
    if (err) throw err;
    app.listen(config.port, () =>
        console.log("Server running on port " + config.port)
    );
});