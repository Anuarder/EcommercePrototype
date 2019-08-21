const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingCartSchema = new Schema(
    {
        quantity: Number,
        products: [Object]
    },
    {
        collection: "ShoppingCart"
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("ShoppingCart", shoppingCartSchema);