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
    addUser: (req, res) => {
        res.json({
            message: "add user to the db!!!"
        })
    },
    updateUser: (req, res) => {
        let id = req.params.id;
        res.json({
            message: "update user: ",
            id: id
        })
    },
    delUser:  (req, res) => {
        let id = req.params.id;
        res.json({
            message: "del user from the db!!!",
            id: id
        })
    }
}