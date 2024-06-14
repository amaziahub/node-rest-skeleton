import {Router} from "express";
import {bookRoom, getAvailableRooms, resetBooking} from "../controllers/bookingController";


const router = Router();
router.get('/available', getAvailableRooms);
router.post('/book', bookRoom);
router.get('/reset', resetBooking);
export default router;