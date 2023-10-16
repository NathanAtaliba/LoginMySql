import { expect } from "chai";
import connectionMySql from "../database/db.js";
import {getUsers} from "../controllers/usersControllers.js"
describe('Users tests: ',()=>{

    it('Teste de conexão com MySql', async () => {
        const connection = await connectionMySql();
        expect(true).to.equal(connection);
    });
    
    it('Teste de busca de usuarios', async() => {
        const search = await getUsers();
        expect(!null).to.equal(search);
    })
})