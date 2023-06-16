const getAllUsers = (req, res) => {
    console.log('get all users');
    res.sendStatus(200);
}

const getUserByID = (req, res) => {
    const id = req.params.id;

    console.log('get one user '+id);
    res.sendStatus(200);
}

const createUser = (req, res) => {
    // get body json datas
}

module.exports = {
    getAllUsers,
    getUserByID,
    createUser
}