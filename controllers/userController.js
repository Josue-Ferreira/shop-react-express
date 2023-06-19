const Database = require('../model/Database');
const User = require('../model/User');
const genToken = require('uid2');
const bcrypt = require('bcrypt');

const database = new Database();
database.connect();
const user = new User(database.pool.promise());

const getAllUsers = async(req, res) => {
    try{
        const results = await user.getAll();
        res.json(results);
    }catch(e){
        res.sendStatus(500);
    }
}

const getUserByID = async(req, res) => {
    const id = req.params.id;

    try{
        const result = await user.get(id);
        res.json(result);
    }catch(e){
        res.sendStatus(500);
    }
}

const userGetProfile = async(req, res) => {
    const {email, password} = req.body;

    try{
        const result = await user.getProfile(email);
        if(result.length != 0 && bcrypt.compareSync(password,result[0].password))
            res.json(result);
        else
            res.sendStatus(404);
    }catch(e){
        res.sendStatus(500);
    }
}

const createUser = async(req, res) => {
    const {first_name, last_name, email, password}  = req.body;

    const hash = bcrypt.hashSync(password, 10);
    const token = genToken(15);

    try{
        await user.create(first_name, last_name, email, hash, token);
        res.sendStatus(200);
    }catch(e){
        res.sendStatus(500);
    }
}

const updateUser = async(req, res) => {
    const id = req.params.id;

    try{
        Object.keys(req.body).forEach(async key => {
            await user.update(key, req.body[key], id)
        });
        res.sendStatus(200);
    }catch(e){
        res.sendStatus(500);
    }
}

const updateUserPassword = async(req, res) => {
    const id = req.params.id;
    const {password} = req.body;

    const hash = bcrypt.hashSync(password, 10);

    try{ 
        await user.update(id, 'password', hash);
        res.sendStatus(200);
    }catch(e){
        res.sendStatus(500);
    }
}

module.exports = {
    getAllUsers,
    getUserByID,
    createUser,
    userGetProfile,
    updateUser,
    updateUserPassword
}