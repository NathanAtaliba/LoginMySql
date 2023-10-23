# Projeto LoginMySql

## Nome:

### Nathan Santos Ataliba

## Comandos para utilização do projeto:
 - Crie um arquivo .env e coloque as seguintes variaveis de acordo com sua configuração:
    DB_HOST= SeuHost
    DB_PORT= SuaPorta
    DB_USER= SeuUser
    DB_PASS= SuaSenha
    DB_DATABASE= SeuDatabase

````git clone [https]````

````npm install````

````npm run start````

## Comandos para utilizar os testes:
````npm test````

## Objetivos:
    - Criar usuarios com email e senha.
    - Buscar todos usuarios.
    - Deletar usuarios com email especifico.
    - Atualizar a senha de algum usuario especifico.

## Comandos necessarios no banco de dados:
    create database if not exists dbusers;
    
    create table users(
    email varchar(255),
    senha varchar(255)
    );

    
    



