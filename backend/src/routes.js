import { Router } from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/usersControllers";
const routes =  Router();

routes.get('/users', getUsers )

routes.post('/users', createUser )

routes.put('/users', updateUser)

routes.delete('/users',deleteUser)


export default routes;


