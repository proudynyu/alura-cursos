import { Router } from 'express'
import attendance from './controllers/attendance'

const route = Router()

route.get('/api/v1/attendance', attendance.index)
route.post('/api/v1/attendance', attendance.create)

export default route