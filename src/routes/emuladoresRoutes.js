import express from "express";
import { getAllEmuladores } from "../controllers/emuladoresController.js";

const router = express.Router();
router.get("/", getAllEmuladores);

export default router;