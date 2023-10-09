import mysql from 'mysql2';

async function connectionMySql(){
        const connect = mysql.createPool({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'Oufreds2s2-',
            database: 'users'
        })
        
        connect.getConnection((err, connection) => {
            if (err) {
                console.error('Error connecting to database:', err);
                return;
            }
            console.log('Connected to database');
            connection.release();
        });
}

export default connectionMySql;
