const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {
        name: String,
        image: String,
        price: Number,
        description: String,
        details: [String]
    },
    {
        collection: "Products"
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("Products", productsSchema);