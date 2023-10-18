import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import {connectionMySql} from './database/db.js';

const app = express();

connectionMySql()

const port = 3000;

app.use(express.json());

app.use(routes);

app.use(cors());

app.listen(port, () => {
    console.log(`Server listenin in the port = ${port}`) 
});

export default { app };