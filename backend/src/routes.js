import { Router } from "express";
import { getUsers, createUser, updateUser, deleteUser, searchUser } from "./controllers/usersControllers.js";
import { getProducts, getproductsfilter } from "./controllers/productsControllers.js"
const routes =  Router();

//ROTAS PARA USUARIO
routes.get('/users', getUsers )

routes.get('/user', searchUser )

routes.post('/users', createUser )

routes.put('/users/:email', updateUser)

routes.delete('/users/:email', deleteUser)

//ROTAS PARA PRODUTOS
routes.get('/products', getProducts)

routes.post('/products', getproductsfilter)
export default routes;


