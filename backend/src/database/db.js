import mysql from 'mysql2';

function connectionMySql(){
        const connection =  mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'root',
            database: 'users'
        });

        try{
            connection.connect();
            console.log('Conectado ao MySQL com o ID ' + connection.connect(callback));
            return true;
        }catch(error){
            console.log("Erro:" + error);
            return false;
        }
    }

export default connectionMySql;
