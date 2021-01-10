import { Request, Response } from "express";
import connection from "../data/connection";

interface CreateAttendance {
  client: string;
  pet: string;
  service: string;
  status: string;
  observations: string;
}

export default {
  async index(req: Request, res: Response) {
    const trx = await connection.transaction();
    try {
      const getAttendance = await trx("attendance").select("*");

      return res.json({
        getAttendance,
      });
    } catch (e) {
      console.log(e);
    }
  },
  async create(req: Request, res: Response) {
    const {
      client,
      pet,
      service,
      status,
      observations,
    } = req.body as CreateAttendance;

    try {
      const attendance = {
        client,
        pet,
        service,
        status,
        observations,
      };

      const trx = await connection.transaction();
      const insertAttendance = await trx("attendance").insert(attendance);

      await trx.commit()

      return res.json({
        id: insertAttendance[0],
        status: 200,
      });
      
    } catch (error) {
      console.log(error);
      res.json({
        status: 400,
        msg: error,
      });
    }
  },
};
