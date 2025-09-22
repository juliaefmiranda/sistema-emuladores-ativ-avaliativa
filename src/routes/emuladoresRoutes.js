import express from "express";
import { getAllEmuladores, getEmuladoresById } from "../controllers/emuladoresController.js";

const router = express.Router();
router.get("/", getAllEmuladores);
router.get("/:id", getEmuladoresById);

export default router;
