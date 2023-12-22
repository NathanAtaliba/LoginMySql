import { connection } from "../database/db.js";

function getProducts(req, res){
    try{
        const q = `SELECT * FROM products`;    
        connection.query(q, function(err, data){
        if (err) {
            console.error('Erro ao executar a consulta: ' + err);
            return res.status(500).send('Erro no servidor.');
        }
        else {
            let produtos =  data;
            return res.status(200).json(produtos);
        }  
        });
        } catch (error) {
            console.error('Erro na função getUsers: ' + error);
            return res.status(500).send('Erro no servidor.');
        }
}
function getproductsfilter(req, res){
    try{
        const q = req.body.query;  
        connection.query(q, function(err, data){
        if (err) {
            console.error('Erro ao executar a consulta: ' + err);
            return res.status(500).send('Erro no servidor.');
        }
        else {
            let produtos =  data;
            return res.status(200).json(produtos);
        }  
        });
        } catch (error) {
            console.error('Erro na função getUsers: ' + error);
            return res.status(500).send('Erro no servidor.');
        }
}
export {getProducts, getproductsfilter}