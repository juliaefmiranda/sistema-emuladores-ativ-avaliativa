import express from "express";
import { createEmulador, getAllEmuladores, getEmuladoresById, updateEmulador } from "../controllers/emuladoresController.js";

const router = express.Router();
router.get("/", getAllEmuladores);
router.get("/:id", getEmuladoresById);
router.post("/", createEmulador);
router.put("/:id", updateEmulador);

export default router;
