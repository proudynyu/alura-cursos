import {Request, Response} from 'express'

interface CreateAttendance {
  teste: string
}

export default {
  index(req: Request, res: Response) {
    return res.json({
      msg: 'Success',
      status: 200,
      locals: {
        end: '',
        num: 0
      }
    })
  },
  create(req: Request, res: Response) {
    const { teste } = req.body as CreateAttendance
    return res.json({
      status: 200,
      message: teste
    })
  },
}