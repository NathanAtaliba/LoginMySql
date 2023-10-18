import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();    
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

function connectionMySql(){
    try{
        connection.connect()
        return true;
    }catch(error){
        console.log("Erro:" + error);
        return false;
        }
    }

export {connectionMySql, connection};
