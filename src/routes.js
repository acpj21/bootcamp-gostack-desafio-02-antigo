import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// rota para autenticação
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// middleware garante que as demais rotas a seguir estejam acessíveis
// apenas para usuários autenticados
routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

export default routes;
