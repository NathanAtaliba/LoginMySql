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
### Autenticação:
    - [x] O usuario pode criar uma conta e se logar nela. 
    - [x] Ao criar a conta o usuario é cadastrado no banco de dados. 
    - [x] Ao se logar na conta, é gerado um token guardado como cookie na pagina que dura por 1 dia. 
    - [x] O email da pessoa é salvo no localStorage da pagina para ser usado em outras paginas. 
### CRUD:
    - O usuario pode ter a opção de excluir sua conta do banco de dados ao se logar - 🚧
    - O usuario pode trocar sua senha ao se esquecer dela - 🚧

## Comandos necessarios no banco de dados:
    create database if not exists dbusers;
    
    create table users(
        email varchar(255),
        senha varchar(255)
    );

    create table products(
        id int auto_increment primary key,
        name varchar(255),
        descr varchar(255),
        color varchar(255),
        category varchar(255),
	    price int, 
        img varchar(255)

    );

### Exemplo de insert de um produto:
    INSERT INTO products (id, name, descr, color, price, img) VALUES(1, 'camisa personalizada', 'camisa de time', 'blue','shirts', 20, '\\shirts\\212.jpg');


    
    



