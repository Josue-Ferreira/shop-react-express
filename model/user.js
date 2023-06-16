const database = require('./connectDB');
const genToken = require('uid2');
const bcrypt = require('bcrypt');

const getAllUsers = (req, res) => {
    database.query('SELECT * FROM user',
        (err, results, fields) => {
            if(err){
                res.sendStatus(500);
                throw err;
            }
            else {
                res.json(results);
            }
    });
}

const getUserByID = (req, res) => {
    const id = req.params.id;

    database.query('SELECT * FROM user WHERE id=?', [id],
        (err, results, fields) => {
            if(err){
                res.sendStatus(500);
                throw err;
            }
            else {
                res.json(results);
            }
    });
}

const userGetProfile = (req, res) => {
    const {email, password} = req.body;

    database.query('SELECT * FROM user WHERE email=?',[email],
        (err, results, fields) => {
            if(err || results.length == 0){
                res.sendStatus(500);
                throw err || 'No result';
            }
            else if(bcrypt.compareSync(password,results[0].password)){
                res.json(results);
            }
            else{
                res.sendStatus(404);
            }
        }
    )
    console.log({email, password})
}

const createUser = (req, res) => {
    // get body json datas
}

module.exports = {
    getAllUsers,
    getUserByID,
    createUser,
    userGetProfile
}