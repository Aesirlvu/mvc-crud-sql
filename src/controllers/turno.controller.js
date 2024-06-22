import { create, findOne, findAll, update, remove } from "../utils/db.utils.js";

export const createTurno = async (req, res) => {
  try {
    const turno = await create("turnos", req.body);
    console.log("Turno creado:", turno.insertId);
    return res.json({ message: "Turno creado: ", turno });
  } catch (error) {
    console.error("Error al crear un turno:", error.message);
    return res.status(400).json({ error: error.message });
  }
};
export const getTurnos = async (req, res) => {
  try {
    const turnos = await findAll("turnos");
    console.log("Turnos obtenidos: ", turnos.length);
    return res.json({ turnos });
  } catch (error) {
    console.error("Error al obtener Turnos: ", error.message);
    return res.status(500).json({ error: error.message });
  }
};
export const getTurno = async (req, res) => {
  try {
    const { id } = req.params;
    const turno = await findOne("turnos", `id = ?`, [id]);
    if (turno.length > 0) {
      console.log("Turno obtenido: ", turno[0].id);
    } else {
      console.log(`No se ha encontrado ningún turno con el id ${id}`);
    }
    return res.json({ turno });
  } catch (error) {
    console.error(`Error al obtener turno con id ${id}: `, error.message);
    return res.status(500).json({ error: error.message });
  }
};
export const updateTurno = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await update("turnos", `id = ?`, [id], req.body);
    console.log("Turno actualizado: ", usuario.changedRows);
    return res.json({ message: "Turno actualizado: ", usuario });
  } catch (error) {
    console.error(`Error al actualizar turno con id ${id}: `, error.message);
    return res.status(400).json({ error: error.message });
  }
};
