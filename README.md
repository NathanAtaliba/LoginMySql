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
        gender varchar(255),
        color1 varchar(255),
        color2 varchar(255),
        category varchar(255),
	    price int, 
        img varchar(255)
    );

### Exemplo de insert de um produto:

#### Adidas:

##### Sneakers
    INSERT INTO products (id, name, brand, gender , color1, color2, category, price, img) VALUES(1, 'Tênis Adidas Grand Court 2.0','adidas', 'F', 'white', 'black', 'sneakers' ,250, '\\Adidas\\Sneakers\\AdidasWhiteSneakers.jpg');

    INSERT INTO products (id, name, brand, gender, color1, color2, category, price, img) VALUES(2, 'Tênis Adidas Ultra Energy','adidas', 'M' ,'blue', 'white', 'sneakers' , 200, '\\Adidas\\Sneakers\\AdidasBlueSneakers.jpg');

    INSERT INTO products (id, name, brand, gender, color1, color2, category, price, img) VALUES(3, 'Tênis Adidas Ultra Energy','adidas', 'M' ,'black', 'white', 'sneakers' , 200, '\\Adidas\\Sneakers\\AdidasBlackSneakers.jpg');

    INSERT INTO products (id, name, brand, gender, color1, color2, category, price, img) VALUES(4, 'Tênis Adidas Courtflash Speed','adidas', 'M' ,'red', 'white', 'sneakers' , 400, '\\Adidas\\Sneakers\\TênisAdidasCourtflashSpeed.jpg');

    INSERT INTO products (id, name, brand, gender, color1, color2, category, price, img) VALUES(5, 'TTênis Adidas Advantage','adidas', 'F' ,'green', 'null', 'sneakers' , 200, '\\Adidas\\Sneakers\\TênisAdidasAdvantage.jpg');

##### Shirts
    
    INSERT INTO products (id, name, brand, gender, color1, color2, category, price, img) VALUES(6, 'Camisa Flamengo Torcedor Adidas','adidas', 'M' ,'red', 'black', 'shirts' , 250, '\\Adidas\\Shirts\\CamisaFlamengoTorcedorAdidas.jpg');

    INSERT INTO products (id, name, brand, gender, color1, color2, category, price, img) VALUES(7, 'Camisa Flamengo Torcedor Adidas','adidas', 'M' ,'white', 'black', 'shirts' , 280, '\\Adidas\\Shirts\\CamisaFlamengoTorcedorAdidasWhite.jpg');

    INSERT INTO products (id, name, brand, gender, color1, color2, category, price, img) VALUES(8, 'Camisa São Paulo Torcedor Adidas','adidas', 'M' ,'white', 'black', 'shirts' , 280, '\\Adidas\\Shirts\\CamisaFlamengoTorcedorAdidasWhite.jpg');

    INSERT INTO products (id, name, brand, gender, color1, color2, category, price, img) VALUES(9, 'Camisa São Paulo Torcedor Adidas','adidas', 'M' ,'red', 'white', 'shirts' , 140, '\\Adidas\\Shirts\\CamisaInternacionalTorcedorAdidas.jpg');
    
    INSERT INTO products (id, name, brand, gender, color1, color2, category, price, img) VALUES(10, 'Camisa Real Madrid Third Torcedor Adidas','adidas', 'M' ,'black', 'white', 'shirts' , 250, '\\Adidas\\Shirts\\CamisaRealMadridThirdTorcedorAdidas.jpg');

##### Sandals:

##### Flats:

#### Nike:

##### Sneakers:

    INSERT INTO products (id, name, brand, gender, color, category, price, img) VALUES(11, 'Tênis Nike Downshifter 12','nike', 'M' ,'green', 'sneakers' , 300, '\\Nike\\Sneakers\\TênisNikeDownshifter12.jpg');

##### Shirts:

##### Sandals:

##### Flats:

    

    
    



