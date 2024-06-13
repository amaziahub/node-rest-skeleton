import {Express, Router} from 'express';
import roomRoutes from "../routs/roomRoutes";
import bookingRoutes from "../routs/bookingRoutes";

export function loadApiEndpoints(app: Express): void {
  const router = Router();
  router.use('/rooms', roomRoutes);
  router.use('/bookings', bookingRoutes);
  app.use('/api', router);
}