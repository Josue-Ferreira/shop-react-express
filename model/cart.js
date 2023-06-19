const database = require('./connectDB');

const getAllCarts = (req, res) => {
    database.query('SELECT * FROM cart',
        (err, results, fields) => {
            if(err){
                res.sendStatus(500);
                throw err;
            }
            else{
                res.json(results);
            }  
    })
}

const getCart = (req, res) => {
    const user_id = req.params.userid;

    database.query('SELECT * FROM cart WHERE user_id=?', [user_id],
        (err, results, fields) => {
            if(err){
                res.sendStatus(500);
                throw err;
            }
            else{
                res.json(results);
            }
    });
}

const createCart = async(req, res) => {
    const valueToInsert = `[${req.body.products_id}]`;
    const {user_id} = req.body;
    let is_Cart = false;

    database.query('DELETE FROM cart WHERE user_id=?',[user_id],
        (err, results, fields) => {
            if(err){
                res.sendStatus(500);
                console.log(err);
                throw err;
            } 

            database.query('INSERT INTO cart(products_id,user_id) VALUES (?,?)',[valueToInsert,user_id],
                (err, results, fields) => {
                    if(err){
                        res.sendStatus(500);
                        console.log(err);
                        throw err;
                    }
                    else{
                        res.sendStatus(200); 
                    }
            });
    });
}

const updateCart = (req, res) => {
    const valueToUpdate = `[${req.body.products_id}]`;
    const {user_id} = req.body;

    database.query('UPDATE cart SET products_id=? WHERE user_id=?',[valueToUpdate,user_id],
        (err, results, fields) => {
            if(err){
                res.sendStatus(500);
                throw err;
            }
            else{
                res.sendStatus(200);
            }
    });
}

const deleteCart = (req, res) => {
    const {user_id} = req.body;

    database.query('DELETE FROM cart WHERE user_id=?',[user_id],
        (err, results, fields) => {
            if(err){
                res.sendStatus(500);
                throw err;
            }
            else{
                res.sendStatus(200);
            } 
    });
}

const deleteAllCarts = (req, res) => {
    database.query('TRUNCATE cart',
        (err, results, fields) => {
            if(err){
                res.sendStatus(500);
                throw err;
            }
            else{
                res.sendStatus(200);
            } 
    });
}

module.exports = {
    getAllCarts,
    getCart,
    createCart,
    updateCart,
    deleteCart,
    deleteAllCarts
}