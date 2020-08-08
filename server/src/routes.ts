import express, { request } from 'express';
import db from './database/connection';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

routes.delete('/delete/user/:id', classesControllers.delete)

export default routes;