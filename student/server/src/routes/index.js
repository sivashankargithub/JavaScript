import express from 'express'
import StudentRoute from './StudentRoute'
import DepartmentRoute from './DepartmentRoute'
import CarRoute from './CarRoute'
const routes = express()

routes.use('/students', StudentRoute)
routes.use('/departments', DepartmentRoute)
routes.use('/cars', CarRoute)

export default routes