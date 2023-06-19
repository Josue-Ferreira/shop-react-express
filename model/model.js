const Database = require('./Database');
const Cart = require('./Cart');

const database = new Database();
database.connect();
const cart = new Cart(database.pool.promise());

const getAllCarts = async(req, res) => {
    try{
        const results = await cart.getAll();
        res.json(results);
    }catch(e){
        console.error(e)
        res.sendStatus(500);
    }   
}

const getCart = async(req, res) => {
    const user_id = req.params.userid;

    try{
        const result = await cart.get(user_id);
        res.json(result);
    }catch(e){
        console.error(e)
        res.sendStatus(500);
    }
}

const createCart = async(req, res) => {
    const products_id = `[${req.body.products_id}]`;
    const {user_id} = req.body;
    
    try{
        await cart.delete(user_id);
        await cart.create(user_id,products_id);
        res.sendStatus(200);
    }catch(e){
        console.error(e)
        res.sendStatus(500);
    }
}

const deleteCart = async(req, res) => {
    const {user_id} = req.body;

    try{
        await cart.delete(user_id);
        res.sendStatus(200);
    }catch(e){
        console.error(e)
        res.sendStatus(500);
    }
}

const deleteAllCarts = async(req, res) => {
    try{
        await cart.deleteAll();
        res.sendStatus(200);
    }catch(e){
        console.error(e)
        res.sendStatus(500);
    }
}

module.exports = {
    getCart,
    getAllCarts,
    createCart,
    deleteCart,
    deleteAllCarts
}