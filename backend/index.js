import express from 'express';
import connectionMySql from './database/db.js';
import cors from 'cors';
import routes from './routes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use(routes);

app.use(cors());

app.listen(port,()=>{
    console.log(`Server listenin in the port = ${port}`)
    connectionMySql();
})

