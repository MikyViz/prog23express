let User = require('../models/User.js');
let bcrypt = require('bcrypt');
module.exports = {
    getAll: (req, res) => {
        res.json({
            message: "the users list!!!"
        })
    },
    getUser: (req, res) => {
        let id = req.query.id;
        let username = req.query.username;
        res.json({
            message: "i'm the user!!!",
            id: id,
            username: username
        })
    },
    addUser: async (req, res) => {
        try {
            let validUser = await User.validUser(req.body);
            if (validUser.error) { return res.status(400).json(validUser.error.details) }
            req.body.password = await bcrypt.hash(req.body.password, 10)
            let user = await User.save(req.body);
            console.log(user);
            if (user.InsertId || user !== 1) {
                console.log(user.InsertId);
                res.status(201).json({ msj: "error in entring tha data" })
            };
            res.json({
                message: "the user was added sucseccfully"
            })
        } catch (error) {
            console.error(error);
        }
    },
    updateUser: (req, res) => {
        let id = req.params.id;
        res.json({
            message: "update user: ",
            id: id
        })
    },
    delUser: (req, res) => {
        let id = req.params.id;
        res.json({
            message: "del user from the db!!!",
            id: id
        })
    },
    login: async (req, res) => {
        try {
            let validLogin = await User.validLogin(req.body);
            if (validLogin.error) { return res.status(400).json(validLogin.error.details) }

            let user = await User.findUserByEmail(req.body.email);
            if (!user[0][0]?.email.length > 0)
                return res.status(401).json('Auth is faild (⊙_⊙)？');

            let comparePass = await bcrypt.compare(req.body.password, user[0][0]?.password);
            if (!comparePass)
                return res.status(401).json('Auth is faild (⊙_⊙)？');
            return res.json({ message: "Authorisated sucsassfuly!!!" })
        }
        catch (error) {
            console.log(error);
        }
    }
}

