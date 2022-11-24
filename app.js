const express = require('express')
const connectDB = require('./config/db')


const app = express()

//connect database
connectDB()

app.get('/',(request,response) => response.send('Hello World'))

const port = process.env.PORT || 8000

app.listen(port,() => console.log(`Server is running on port ${port}`))