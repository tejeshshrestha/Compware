import dotenv from 'dotenv';
import express from 'express';  
import cors from 'cors';
//const cors = require('cors');
import database from './config/database.js';
//import { config } from 'nodemon';

const app = express()
const port = process.env.PORT
const URI=process.env.DATABASE_URL

//CORS policy
app.use(cors())

//Database Connection 
database(URI)

//JSON
app.use(express.json())

app.listen(port, ()=>{
    console.log('Server listening at https://localhost:${port}');
})