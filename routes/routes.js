import express from 'express'
import {connection,match,getGameJson} from '../controllers/controller.js';
const router = express.Router();
router.route("/connect").post(connection);
router.route("/match/:id").post(match);
router.route("/getGameJson/:id").get(getGameJson)
export default router;