import { connection } from "../database/db.js";
// FUNÇÕES DE INTEGRAÇÃO
function getUsers( req, res ){
  try {     
    const q = 'SELECT * FROM users ';
    connection.query(q, function(err, results) {
    if (err) {
      console.error('Erro ao executar a consulta: ' + err);
      return res.status(500).send('Erro no servidor.');
    }
    else {
      const users = results;
      return res.status(200).json(users);
    }  
    });
      } catch (error) {
        console.error('Erro na função getUsers: ' + error);
        return res.status(500).send('Erro no servidor.');
      }
}

async function createUser(){    
     
}

async function deleteUser(){
}

async function updateUser(){
    
}

async function searchUser(){
    
}

// FUNÇÕES UNITARIAS
function verificaEmail(newEmail){


}

export {getUsers, updateUser, deleteUser, createUser}