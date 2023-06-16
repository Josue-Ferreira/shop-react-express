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
    const id = req.params.id;

    database.query('SELECT * FROM cart WHERE id=?', [id],
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

const createCart = (req, res) => {
    const valueToInsert = `[${req.body.products_id}]`;
    database.query('INSERT INTO cart(products_id) VALUES (?)',[valueToInsert],
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

const updateCart = (req, res) => {
    const id = req.params.id;
    const valueToUpdate = `[${req.body.products_id}]`;

    database.query('UPDATE cart SET products_id=? WHERE id=?',[valueToUpdate,id],
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
    const id = req.params.id;

    database.query('DELETE FROM cart WHERE id=?',[id],
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