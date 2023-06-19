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
                // throw err || 'No result';
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
    const {first_name, last_name, email, password}  = req.body;

    const hash = bcrypt.hashSync(password, 10);
    const token = genToken(15);

    database.query('INSERT INTO user(first_name, last_name, email, password, created_at, is_admin, token) VALUES (?,?,?,?,NOW(),0,?)',[first_name, last_name, email, hash,token],
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
    getAllUsers,
    getUserByID,
    createUser,
    userGetProfile
}