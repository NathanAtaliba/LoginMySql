import mysql from 'mysql2';
import dotenv from 'dotenv';

async function connectionMySql(){
    dotenv.config();    
    try{
    const connection = mysql.createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
        });
            connection.connect();
            console.log('Conectado ao MySQL com o ID ' + connection.connect(callback));
            return true;
        }catch(error){
            console.log("Erro:" + error);
            return false;
        }
    }

export default connectionMySql;
