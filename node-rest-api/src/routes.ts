import { Router } from 'express'
import attendance from './controllers/attendance'

const route = Router()

route.get('/', attendance.index)
route.post('/', attendance.create)

export default route