const Article = require('../models/Article.js')
module.exports = {
    getAll: async (req, res) => {
        try {
            let [articles, _] = await Article.findAll();
            res.json({ count: articles.length, articles });
        } catch (error) {
            console.error(error);
        }

    },
    getArticle: async (req, res) => {
        try {
            let id = req.params.id;
            let [article, _] = await Article.findArticleById(id);
            res.json({ article });
        } catch (error) {
            console.error(error);
        }

    },
    addArticle: async (req, res) => {
        try {
            // let { userID, articleName, content } = req.body;
            // let article = new Article(userID, articleName, content);
           let article = await Article.save(req.body);
            console.log(article);
            res.json({
                message: "add article to the db!!!"
            })
        } catch (error) {
            console.error(error);
        }
    },
    updateArticle: async (req, res) => {
        try {
            let id = req.params.id;
            let validArticle = await Article.validArticle(req.body);
            if (validArticle.error)
             {return  res.status(400).json(validArticle.error.details[0].message)} 
            let updateArticle = await Article.updateArticleById(req.body, id)
            res.json({
            message: "article updated sucsessfull",
            id: id
            })
        } catch (error) {
            console.log(error);
        }
     
    },
    delArticle: async (req, res) => {
        try {
            let id = req.params.id;
            let deleteArticle = await Article.deleteArticleById(id);
        res.json({
            message: "del article from the db!!!",
            id: id,
            deleteArticle: deleteArticle
        })
        } catch (error) {
            console.log(error);
        }
    }
}