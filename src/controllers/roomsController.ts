import {Request, Response} from 'express';
import {rooms} from "../models/room";

export const getRooms = (req: Request, res: Response) => {
  res.json(rooms);
};
