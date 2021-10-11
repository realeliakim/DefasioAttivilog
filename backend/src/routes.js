import { Router } from 'express';
import HistoricoController from './app/controllers/HistoricoController';

const routes = new Router();

routes.get('/historico', HistoricoController.index);
routes.post('/historico', HistoricoController.store);



export default routes;