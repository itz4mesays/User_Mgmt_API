import express, { Request, Response, Router} from 'express'
import UserController from '../controllers/user.controller'
import user from '../models/user'

const userController = new UserController
const router : Router = express.Router()

router.post('/users', userController.createUser)
router.get('/users/:id', userController.getUser)
router.get('/users', userController.getAllUsers)

export default router;
