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

    async getProfile(email){
        const [result] = await this.database.query('SELECT * FROM user WHERE email=?',[email]);
        return result;
    }

    async create(first_name, last_name, email, password, token){
        this.database.query('INSERT INTO user(first_name, last_name, email, password, created_at, is_admin, token) VALUES (?,?,?,?,NOW(),0,?)',
            [first_name, last_name, email, password, token]);
    }

    async update(user_id, column, data){
        switch(column){
            case 'first_name' : this.database.query('UPDATE user SET first_name=? updated_at=NOW() WHERE id=?', [data, user_id]);
                                break;
            case 'last_name' :  this.database.query('UPDATE user SET last_name=?, updated_at=NOW() WHERE id=?', [data, user_id]);
                                break;
            case 'email' :      this.database.query('UPDATE user SET email=?, updated_at=NOW() WHERE id=?', [data, user_id]);
                                break;
            case 'password' :   this.database.query('UPDATE user SET password=?, updated_at=NOW() WHERE id=?', [data, user_id]);
                                break;
        } 
    }
}

module.exports = User;