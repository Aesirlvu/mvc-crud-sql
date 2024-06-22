import { Router } from "express";
import {
  createUsuario,
  deleteUsuario,
  getUsuario,
  getUsuarios,
  updateUsuario,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/users", createUsuario);
router.get("/users", getUsuarios);
router.get("/users/:id", getUsuario);
router.put("/users/:id", updateUsuario);
router.delete("/users/:id", deleteUsuario);

export default router;
