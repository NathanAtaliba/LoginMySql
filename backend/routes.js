import { Router } from "express";

const routes =  Router();

routes.get('/',( req, res ) => {
    console.log('Foi feito um get');
    res.send('OK');
})

export default routes;


