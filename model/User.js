class User {
    constructor(database){
        this.database = database;
    }

    async get(user_id){
        const [result] = await this.database.query('SELECT * FROM user WHERE id=?', [user_id]);
        return result;
    }

    async getAll(){
        const [results] = await this.database.query('SELECT * FROM user');
        return results;
    }

    async getProfile(email, password){
        const [result] = await this.database.query('SELECT * FROM user WHERE email=?',[email]);
        return result;
    }

    async create(first_name, last_name, email, password, token){
        this.database.query('INSERT INTO user(first_name, last_name, email, password, created_at, is_admin, token) VALUES (?,?,?,?,NOW(),0,?)',
            [first_name, last_name, email, password, token]);
    }
}

module.exports = User;