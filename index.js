import cors from "cors";
import "dotenv/config";
import Express from "express";
import helmet from "helmet";
import morgan from "morgan";
import router from "./src/routes/user.routes.js";
import turnoRouter from "./src/routes/turno.routes.js";
import UserEntity from "./src/models/user.model.js";
import TurnosEntity from "./src/models/turno.model.js";
import authRouter from "./src/routes/auth.routes.js";

const app = Express();

const URL = process.env.BACKEND_URL;
const PORT = process.env.BACKEND_PORT;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(helmet());

app.use("/api", router);
app.use("/api", turnoRouter);
app.use("/auth", authRouter);

app.use("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.use((req, res) => {
  res.status(404).send("404 - No encontrado");
});

async function initModels() {
  await UserEntity();
  await TurnosEntity();
}

app.listen(PORT, async () => {
  await initModels();
  console.log(`Servidor ejecutandose en: ${URL}:${PORT}`);
});
