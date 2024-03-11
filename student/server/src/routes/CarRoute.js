import express from 'express'
import CarController from '../controllers/CarController'
const router = express.Router()

router.post('/addCarDetails', CarController.addCarDetails)
router.get('/findAllCarDetails', CarController.findCarDetails)
router.get('/findCarById', CarController.findCarById)

export default router;