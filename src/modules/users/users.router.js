import { Router } from "express";
import * as userController from './users.controller.js';
const router = Router();
router.get('/', userController.getUser)
router.post('/addUsers',userController.addUser)
    
export default router;