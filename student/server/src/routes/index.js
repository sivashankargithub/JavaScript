import express from 'express'
import StudentRoute from './StudentRoute'
import DepartmentRoute from './DepartmentRoute'
import CarRoute from './CarRoute'
import UserRoute from './UserRoute'
const routes = express()

routes.use('/students', StudentRoute)
routes.use('/departments', DepartmentRoute)
routes.use('/cars', CarRoute)
routes.use('/users',UserRoute)

export default routes