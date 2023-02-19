import express from 'express'
import {connection,match} from '../controllers/controller.js';
const router = express.Router();
router.route("/connect").post(connection);
router.route("/match/:id").post(match);
export default router;