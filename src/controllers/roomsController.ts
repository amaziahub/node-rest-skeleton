import {Request, Response} from 'express';
import {rooms} from "../models/room";

export const getRooms = (req: Request, res: Response) => {
  try {
    res.json(rooms);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
