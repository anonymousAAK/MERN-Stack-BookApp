import express, { request } from 'express';

const app = express()

app.get('/',(request,response) => response.send('Hello World'))

const port = process.env.PORT || 8000

app.listen(port,() => console.log(`Server is running on port ${port}`))