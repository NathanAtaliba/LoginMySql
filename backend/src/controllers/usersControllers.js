import { connection } from "../database/db.js";
// FUNÇÕES DE INTEGRAÇÃO
function getUsers( req, res ){
  try {     
    let q = 'SELECT * FROM users ';
    connection.query(q, function(err, results) {
    if (err) {
      console.error('Erro ao executar a consulta: ' + err);
      return res.status(500).send('Erro no servidor.');
    }
    else {
      let users =  results;
      return res.status(200).json(users);
    }  
    });
      } catch (error) {
        console.error('Erro na função getUsers: ' + error);
        return res.status(500).send('Erro no servidor.');
      }
}

function createUser(req , res){
  try {
    let email = req.body.email;
    let password = req.body.password;
    let q = `INSERT INTO users (email, senha) VALUES('${email}', '${password}')`;
    connection.query(q, function(err){
      if (err) {
        console.error('Error creating user: ' + err);
        return res.status(500).send('Erro no servidor.');
      }
      else {
        return res.status(201).json('User created sucessfully');
    }  
    });
  } catch (error) {
      console.error('Erro na função createUser: ' + error);
      return res.status(500).send('Erro no servidor.');
  }
  }

function deleteUser(req , res){
  try {
    let email = req.params;
    let q = `DELETE FROM users WHERE email = '${email.email}'`;
    connection.query( q, function(err, results){
      if (err) {  
        console.error('Error deleting user: ' + err);
        return res.status(500).send('Erro no servidor.');
      }
      else {
        if(results.affectedRows){
          return res.status(200).json('User deleted sucessfully');
        }else{
          return res.status(404).json(`User not found`);
        }
      }  
      });
  } catch (error) {
     console.error('Erro na função deleteUser: ' + error);
     return res.status(500).send('Erro no servidor.');
  }
}

function updateUser(req, res){
  try {
    let email = req.params;
    let password = req.body.password;
    let q = `UPDATE users SET senha = '${password}' WHERE email = '${email.email}'`;
    connection.query( q, function(err, results){
      if (err) {  
        console.error('Error updating user: ' + err);
        return res.status(500).send('Erro no servidor.');
      }
      else {
        if(results.changedRows){
          return res.status(200).json('User updating sucessfully');
        }else{
          return res.status(404).json('User not found');
        }
      }  
      });
  } catch (error) {
     console.error('Erro na função updateUser: ' + error);
     return res.status(500).send('Erro no servidor.');
  }
}

async function searchUser(req, res){
  try {
    const email = req.body.email;
    const q = `SELECT * FROM users WHERE email = '${email}'`;
    connection.query( q, function(err, results){
      if (err) {  
        console.error('Error updating user: ' + err);
        return res.status(500).send('Erro no servidor.');
      }
      else {
          return res.status(200).json(results.info);
        }
      });
  } catch (error) {
     console.error('Erro na função updateUser: ' + error);
     return res.status(500).send('Erro no servidor.');
  }
}

// FUNÇÕES UNITARIAS
function verificaEmail(newEmail){
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(newEmail);
}


export {getUsers, updateUser, deleteUser, createUser, searchUser, verificaEmail}