const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');
const user = require('./routes/user');
const cors = require('cors');

const logger = require('./middleware/logger');

const port = 3001

app.use(cors());
//הגדרת תיקייה סטטית בשם public. כל קובץ שנמצא בתיקיה, ירוץ בצורה סטטית
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(logger); 

app.use("/user", user)

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})



// אין צורך בקוד הבא כי השתמשנו בתיקיה סטטית
// app.get('/', (req, res) => {
// //   res.send('Hello World get!')
//   fs.createReadStream(path.join(__dirname,
//     './src/index.html')).pipe(res);
// })

// app.get('/about', (req, res) => {
//   fs.createReadStream(path.join(__dirname,
//     './src/about.html')).pipe(res);
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
