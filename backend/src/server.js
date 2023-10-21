import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import {connectionMySql} from './database/db.js';

const app = express();

connectionMySql()

const port = 3000;

app.use(express.json());

app.use(routes);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
app.use(cors());

export default app;