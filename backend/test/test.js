import { expect } from "chai";
import {connectionMySql} from "../src/database/db.js";
import request from 'supertest';
import app from '../src/server.js';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { searchUser, verificaEmail } from "../src/controllers/usersControllers.js";

chai.use(chaiHttp);
chai.should(); // Configura should para poder ser usado

describe('Users sucess tests : ',()=>{
    //TESTES DE INTEGRAÇÃO
    it('Teste de busca de usuarios', async() => {
        const response = await request(app)
        .get('/users')
        expect(response.status).to.eql(200);
    });

    it('Teste para criar usuario', async() => {
        const newUser = {
            "email": "teste@gmail.com",
            "password": "123456"
        }
        const response = await request(app)
        .post('/users')
        .send(newUser)
        expect(response.status).to.eql(201);
    });

    it('Teste para atualizar usuario', async() => {
        const updateUser= {
            "email" : "teste@gmail.com",
            "password" : "111111"
        }
        const response = await request(app)
        .put(`/users/${updateUser.email}`)
        .send(updateUser)
        expect(response.status).to.eql(200);
    });

    it('Teste para deletar usuario', async() => {
        const deleteUser = {
            "email" : "teste@gmail.com"
        }
        const response = await request(app)
        .delete(`/users/${deleteUser.email}`)
        expect(response.status).to.eql(200);
    });
    
    it('Teste de procura de usuario', async() => {
        const searchUser = {
            "email": "nathan@gmail.com",
        }
        const response = await request(app)
        .get('/user')
        .send(searchUser)
        expect(response.status).to.eql(200);
    });

    //TESTES UNITARIOS
    it('Teste de conexão com MySql', async () => {
        const connectionTest = connectionMySql();
        expect(true).to.eql(connectionTest);
    });
    
    it('Teste de email valido', async() => {
        const email = 'nathan@gmail.com';
        expect(verificaEmail(email)).to.eql(true);
    });
})

describe('Users fails tests : ',()=>{

    //TESTES DEI INTEGRAÇÃO
    it('Teste para atualizar usuario', async() => {
        const updateUser= {
            "email" : "UserNaoExiste@gmail.com",
            "password" : "111111"
        }
        const response = await request(app)
        .put(`/users/${updateUser.email}`)
        .send(updateUser)
        expect(response.status).to.eql(404);
    });

    it('Teste para deletar usuario', async() => {
        const deleteUser = {
            "email" : "UserNaoExiste@gmail.com"
        }
        const response = await request(app)
        .delete(`/users/${deleteUser.email}`)
        expect(response.status).to.eql(404);
    });   

    //TESTES UNITARIOS
    it('Teste de email invalido', async() => {
        const email = 'nathangmail.com';
        expect(verificaEmail(email)).to.eql(false);
    });
})
