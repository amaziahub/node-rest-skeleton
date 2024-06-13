import { Request, Response } from 'express';
import {Booking} from "../models/booking";
import {Room} from "../models/room";

let rooms: Room[] = [
  new Room(1, 'Room A'),
  new Room(2, 'Room B'),
  new Room(3, 'Room C'),
  new Room(4, 'Room D')
];

let bookings: Booking[] = [];

export const getAvailableRooms = (req: Request, res: Response) => {
  const { date } = req.query as { date: string };
  const bookedRoomIds = bookings.filter(b => b.date === date).map(b => b.roomId);
  const availableRooms = rooms.filter(r => !bookedRoomIds.includes(r.id));
  res.json(availableRooms);
};

export const bookRoom = (req: Request, res: Response) => {
  const { roomId, date, bookedBy } = req.body;

  const room = rooms.find(r => r.id === roomId);
  if (!room) {
    return res.status(404).send('Room not found');
  }

  const existingBooking = bookings.find(b => b.roomId === roomId && b.date === date);
  if (existingBooking) {
    return res.status(400).send('Room is already booked for this date');
  }

  const booking = new Booking(bookings.length + 1, roomId, date, bookedBy);
  bookings.push(booking);

  res.status(204).send();
};
