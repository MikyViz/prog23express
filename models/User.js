const db = require('../config/db.js');
const joi = require('joi');

class User{
    constructor(){
    }
    static async save (data){
        let sql = `INSERT INTO users SET ?`
    
        try {
                const [newUser, _] = await db.query(sql, [data]);
        return newUser[0];
        } catch (error) {
            console.error(error.stack);
            return (1)
        }
    }

    static async findAll (){
        let sql =`SELECT * FROM users`;
        return await db.execute(sql); 
    }
    static async findUserById (id){
        // let sql =`SELECT * FROM Users WHERE id=${id}`;
        let sql =`SELECT * FROM users WHERE id=?`;
        return await db.execute(sql, [id]); 
    }
    static async updateUserById(data, id) {
        let sql = `UPDATE users SET ? WHERE id=?`;
        const [updatedUser, _] = await db.query(sql, [data, id]);
        return updatedUser;
    }
    static async deleteUserById(id) {
        let sql = `DELETE FROM users WHERE id = ?`;
        return await db.execute(sql, [id]);
    }
    static async findUserByEmail (email){
        try {
                // let sql =`SELECT * FROM Users WHERE id=${id}`;
        let sql ='SELECT * FROM `users` WHERE `email`=?';
        // 'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?'
        let result = await db.execute(sql, [email]); 
        return result
        } catch (error) {
            console.log(error);
        }
    }
    static async validUser(body){
        let UserSchema = joi.object({
            userName: joi.string().required().min(5).max(40),
            password: joi.string().required().min(6).max(35),
            email: joi.string().required().min(10).email()
        });
        return UserSchema.validate(body)
    }
    static async validLogin(body){
        let UserSchema = joi.object({
            password: joi.string().required().min(6).max(35),
            email: joi.string().required().min(10).email()
        });
        return UserSchema.validate(body)
    }
};

module.exports = User