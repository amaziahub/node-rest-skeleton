import {Request, Response} from 'express';
import {Booking, bookings, initBooking} from "../models/booking";
import {rooms} from "../models/room";

export const getAvailableRooms = (req: Request, res: Response) => {
  const { date } = req.query as { date: string };
  const bookedRoomIds = bookings.filter(b => b.date === date).map(b => b.roomId);
  const availableRooms = rooms.filter(r => !bookedRoomIds.includes(r.id));
  res.json(availableRooms);

};

export const bookRoom = (req: Request, res: Response) => {
  const { roomId, date, bookedBy } = req.body;

  validateRoomExists(roomId, res);
  validateRoomNotOccupied(roomId, date, res)
  book(roomId, date, bookedBy);

  res.status(204).send();
};

export const resetBooking = (req: Request, res: Response) => {
  initBooking()
  res.json(bookings);
}

function validateRoomExists(roomId: number, res: any) {
  const room = rooms.find(r => r.id === roomId);
  if (!room)
    return res.status(404).send('Room not found');
}

function validateRoomNotOccupied(roomId: number, date: string, res: any) {
  const existingBooking = bookings.find(b => b.roomId === roomId && b.date === date);
  if (existingBooking) {
    return res.status(400).send('Room is already booked for this date');
  }
}

function book(roomId: number, date: string, bookedBy: string) {
  const booking = new Booking(bookings.length + 1, roomId, date, bookedBy);
  bookings.push(booking);
}
