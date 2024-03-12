import express from 'express'
import UserController from '../controllers/UserController'
const router = express.Router()

router.post('/login', UserController.Login)
router.post('/register', UserController.Registration)

export default router;