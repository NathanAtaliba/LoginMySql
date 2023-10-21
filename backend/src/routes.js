import { Router } from "express";
import { getUsers, createUser, updateUser, deleteUser } from "./controllers/usersControllers.js";
const routes =  Router();

routes.get('/users', getUsers )

routes.post('/users', createUser )

routes.put('/users/:email', updateUser)

routes.delete('/users/:email',deleteUser)

export default routes;


