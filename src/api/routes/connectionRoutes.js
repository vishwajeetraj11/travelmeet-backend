

import { Router } from 'express';
import { approveConnection, createConnection, deleteConnection} from '../controllers/connectionController.js';
import { checkJwt } from '../middlewares/authMiddleware.js';
import { authorizeMiddleware } from '../middlewares/authorizeMiddleware.js';

export const connectionRouter = Router({mergeParams: true});
connectionRouter.use(checkJwt);
connectionRouter.use(authorizeMiddleware);
connectionRouter.route('/').post(createConnection).delete(deleteConnection).patch(approveConnection);
