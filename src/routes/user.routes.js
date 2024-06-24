import { Router } from "express";
import {
  // createUsuario,
  deleteUsuario,
  getUsuario,
  getUsuarios,
  updateUsuario,
} from "../controllers/user.controller.js";

const router = Router();

// router.post("/usuarios", createUsuario);
router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuario);
router.put("/usuarios/:id", updateUsuario);
router.delete("/usuarios/:id", deleteUsuario);

export default router;
