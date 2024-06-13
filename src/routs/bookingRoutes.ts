import {Router} from "express";
import {bookRoom, getAvailableRooms} from "../controllers/bookingController";


const router = Router();
router.get('/available', getAvailableRooms);
router.post('/book', bookRoom);
export default router;