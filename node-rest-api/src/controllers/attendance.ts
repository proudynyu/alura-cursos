import { Request, Response } from "express";
import connection from "../data/connection"

interface CreateAttendance {
  client: string;
  pet: string;
  service: string;
  status: string;
  date: string;
  observations: string;
  created_at: number;
}

export default {
  async index(req: Request, res: Response) {
    const trx = await connection.transaction();
    try {
      const getAttendance: Array<CreateAttendance> = await trx("attendance").select("*");

      const responseAttendance = getAttendance?.map(attendance => {
        const date = new Date(attendance.created_at)
        return {
          ...attendance,
          created_at: date.toLocaleString()
        }
      })
      return res.status(200).json(responseAttendance);
    } catch (e) {
      console.log(e);
      return res.status(400)
    }
  },
  async create(req: Request, res: Response) {
    const {
      client,
      pet,
      service,
      status,
      observations,
      date
    } = req.body as CreateAttendance;

    try {
      const attendance = {
        client,
        pet,
        service,
        status,
        observations,
        date
      };

      const trx = await connection.transaction();
      const insertAttendance = await trx("attendance").insert(attendance);

      await trx.commit()

      return res.status(200).json({
        id: insertAttendance[0],
        status: 200,
      });
      
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: 400,
        msg: error,
      });
    }
  },
};
