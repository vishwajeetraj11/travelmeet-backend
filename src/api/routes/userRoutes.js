
import { Router } from 'express';
import { addProfile, getProfile, updateProfile } from '../controllers/userController.js';
import { checkJwt } from '../middlewares/authMiddleware.js';
import { authorizeMiddleware } from '../middlewares/authorizeMiddleware.js';
import { connectionRouter } from './connectionRoutes.js';

export const userRouter = Router();
userRouter.use(checkJwt);
userRouter.use(authorizeMiddleware);
userRouter.use('/:userTo/connection', connectionRouter);
userRouter.route('/profile').get(getProfile).patch(updateProfile).post(addProfile);
