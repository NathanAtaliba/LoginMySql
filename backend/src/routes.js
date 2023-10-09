import { Router } from "express";

const routes =  Router();

routes.get('/users',( req, res ) => {
    console.log('Foi feito um get');
    res.send('OK');
})
routes.post('/users',( req, res ) => {
    console.log('Foi feito um post');
    res.send('OK');
})
routes.put('/users',( req, res ) => {
    console.log('Foi feito um put');
    res.send('OK');
})
routes.delete('/users',( req, res ) => {
    console.log('Foi feito um delete');
    res.send('OK');
})

export default routes;


