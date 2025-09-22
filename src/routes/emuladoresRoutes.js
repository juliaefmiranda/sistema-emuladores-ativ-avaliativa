import express from "express";
import { createEmulador, deleteEmulador, getAllEmuladores, getEmuladoresById, updateEmulador } from "../controllers/emuladoresController.js";

const router = express.Router();
router.get("/", getAllEmuladores);
router.get("/:id", getEmuladoresById);
router.post("/", createEmulador);
router.put("/:id", updateEmulador);
router.delete("/:id", deleteEmulador);

export default router;
