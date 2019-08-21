const ShoppingCart = require("../models/ShoppingCart");

module.exports = {
    async getShoppingCart(req, res) {
        try{
            // TODO: Отдать корзину по id
            let shoppingCart = await ShoppingCart.findOne({_id: req.body._id});
            res.send({
                shoppingCart
            })
        }catch(err){
            console.log(err);
            res.status(400).send(err);
        }
    },
    async addToShoppingCart(req, res){
        try{
            // TODO: Если пришло без id, то создать и отправить
            // TODO: Создание и редактирование корзины
        }catch(err){
            console.log(err);
            res.status(400).send(err);
        }
    }
}