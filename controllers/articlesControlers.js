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
    updatearticle: (req, res) => {
        let id = req.params.id;
        res.json({
            message: "update article: ",
            id: id
        })
    },
    delarticle: (req, res) => {
        let id = req.params.id;
        res.json({
            message: "del article from the db!!!",
            id: id
        })
    }
}