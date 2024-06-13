import { Request, Response } from 'express';
import {Room} from "../models/room";

let rooms: Room[] = [
  new Room(1, 'Room A'),
  new Room(2, 'Room B'),
  new Room(3, 'Room C'),
  new Room(4, 'Room D')
];
export const getAllRooms = (req: Request, res: Response) => {
  try {
    res.json(rooms);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
