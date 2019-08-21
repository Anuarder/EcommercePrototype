const Products = require("../models/Products")

module.exports = {
    async getProducts(req, res){
        try{
            let products = await Products.find({});
            res.send({
                products: products
            });
        }catch(err){
            console.log(err);
        }
    }
}