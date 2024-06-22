import { Router } from "express";
import {
  createTurno,
  getTurnos,
  updateTurno,
  getTurno,
} from "../controllers/turno.controller.js";

const turnoRouter = Router();

turnoRouter.get("/turnos", getTurnos);
turnoRouter.get("/turnos/:id", getTurno);
turnoRouter.post("/turnos", createTurno);
turnoRouter.put("/turnos/:id", updateTurno);

export default turnoRouter;
