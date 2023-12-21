const db = require('../config/db.js');

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

};

module.exports = Article