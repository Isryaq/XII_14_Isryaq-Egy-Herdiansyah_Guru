const express = require('express')
const dotenv = require('dotenv')
const router = require('./routes/server.js')
const db = require('./config/db.js')
const port = process.env.PORT || 5000;

const app = express()
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)
db()

app.listen(port, () => {
  console.log(`Server Running on port ${port}`)
})