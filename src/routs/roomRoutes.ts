import { Router } from 'express';
import {getRooms} from "../controllers/roomsController";

const router = Router();
router.get('/', getRooms);
export default router;