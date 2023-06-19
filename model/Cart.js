class Cart {
    constructor(database){
        this.database = database;
    }

    async get(user_id){
        const [res] = await this.database.query('SELECT * FROM cart WHERE user_id=?', [user_id]);
        console.log(res)
        return res;
    }

    async getAll(){
        const [res] = this.database.query('SELECT * FROM cart');
        return res;
    }

    async create(user_id, products_id){
        this.database.query('INSERT INTO cart(products_id,user_id) VALUES (?,?)',[products_id,user_id]);
    }

    async delete(user_id){
        this.database.query('DELETE FROM cart WHERE user_id=?',[user_id]);
    }

    async deleteAll(){
        this.database.query('TRUNCATE cart');
    }
}

module.exports = Cart;