import {Router} from 'express';
const router = Router();
import * as authController from './auth.controller.js';
router.get('/',authController.getauth);

export default router;