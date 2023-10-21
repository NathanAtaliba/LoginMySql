import { expect } from "chai";
import {connectionMySql} from "../src/database/db.js";
import request from 'supertest';
import app from '../src/server.js';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
chai.should(); // Configura should para poder ser usado

describe('Users sucess tests : ',()=>{
    it('Teste de conexão com MySql', async () => {
        const connectionTest = connectionMySql();
        expect(true).to.eql(connectionTest);
    });
    
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
})

describe('Users fails tests : ',()=>{

    })