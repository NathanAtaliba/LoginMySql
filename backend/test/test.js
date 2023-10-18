import { expect } from "chai";
import {connectionMySql} from "../src/database/db.js";
import request from 'supertest';
import app from '../src/server.js';
describe('Users tests: ',()=>{

    it('Teste de conexão com MySql', async () => {
        const connectionTest = connectionMySql();
        expect(true).to.equal(connectionTest);
    });
    
    it('Teste de busca de usuarios', async() => {
        const response = await request(app).get('/users')
        expect(response.status).toBe(200);
    })
})