import { Request, Response } from "express";
import knex from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

const Proffy = {
  async createProffy(req: Request, res: Response) {
    const {
      name,
      avatar_url,
      whatsapp,
      biography,
      subject,
      price,
      schedule,
    } = req.body;

    const trx = await knex.transaction();

    try {
      const insertedUserId = await trx("proffys")
        .insert({
          name,
          avatar_url,
          whatsapp,
          biography,
          subject,
          price,
        })
        .returning("*");

      const user_id = insertedUserId[0].id;

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          user_id,
        };
      });

      await trx("schedule").insert(classSchedule);

      await trx.commit();

      return res.json({ message: "success" });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  },
};

export default Proffy;
