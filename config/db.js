const mysql = require('mysql2');
require ('dotenv').config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// let sql = 'SELECT * FROM articles';
// pool.execute(sql, function(err, result){
// if(err) throw err
// console.log(result);

// result.forEach(res => {
//     console.log(res.articlename);
// });
// });


module.exports = pool.promise();