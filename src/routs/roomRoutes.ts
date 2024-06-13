import { Router } from 'express';
import {getAllRooms} from "../controllers/roomsController";

const router = Router();
router.get('/', getAllRooms);
export default router;