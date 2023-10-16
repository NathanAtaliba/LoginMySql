import connectionMySql from "../database/db.js"
// FUNÇÕES DE INTEGRAÇÃO
async function getUsers( req, res ){
    const q = "SELECT * FROM users";
    try {
        connectionMySql.query(q, function(err, results) {
          if (err) {
            console.error('Erro ao executar a consulta: ' + err);
            return res.status(500).send('Erro no servidor.');
          }
          // Se a consulta for bem-sucedida, você pode fazer algo com os resultados aqui
          return res.status(200).json(results);
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