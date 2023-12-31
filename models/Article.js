const db = require('../config/db.js');
const joi = require('joi');

class Article{
    constructor(userID, articleName, content){
        this.userID = userID,
        this.articleName = articleName,
        this.content = content
    }
    static async save (data){
        let sql = `INSERT INTO articles SET ?`
        const [newArticle, _] = await db.query(sql, [data]);
        return newArticle;
    }

    static async findAll (){
        let sql =`SELECT * FROM articles`;
        return await db.execute(sql); 
    }
    static async findArticleById (id){
        // let sql =`SELECT * FROM articles WHERE id=${id}`;
        let sql =`SELECT * FROM articles WHERE id=?`;
        return await db.execute(sql, [id]); 
    }
    static async updateArticleById(data, id) {
        let sql = `UPDATE articles SET ? WHERE id=?`;
        const [updatedArticle, _] = await db.query(sql, [data, id]);
        return updatedArticle;
    }
    static async deleteArticleById(id) {
        let sql = `DELETE FROM articles WHERE id = ?`;
        return await db.execute(sql, [id]);
    }
    static async validArticle(body){
        let articleSchema = joi.object({
            userID: joi.number().required().min(0),
            articleName: joi.string().min(2).max(40),
            content: joi.string().min(10)
        });
        return articleSchema.validate(body)
    }
};

module.exports = Article