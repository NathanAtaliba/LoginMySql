import { Router } from "express";
import { getUsers, createUser, updateUser, deleteUser, searchUser } from "./controllers/usersControllers.js";
const routes =  Router();

routes.get('/users', getUsers )

routes.get('/user', searchUser )

routes.post('/users', createUser )

routes.put('/users/:email', updateUser)

routes.delete('/users/:email',deleteUser)

export default routes;


