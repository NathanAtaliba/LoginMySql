import mysql from 'mysql2';

async function connectionMySql(){
        const connection = mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'root',
            database: 'users'
        })
        
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to database:', err);
                return;
            }
            console.log('Connected to database');
        });
}

export default connectionMySql;
