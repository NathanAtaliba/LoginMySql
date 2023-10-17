import { expect } from "chai";
import connectionMySql from "../src/database/db.js";
import {getUsers} from "../src/controllers/usersControllers.js"
describe('Users tests: ',()=>{

    it('Teste de conexão com MySql', async () => {
        const connectionTest = await connectionMySql();
        expect(true).to.equal(connectionTest);
    });
    
    it('Teste de busca de usuarios', async() => {
        const search = await getUsers();
        expect(!null).to.equal(search);
    })
})