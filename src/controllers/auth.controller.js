import bcrypt from "bcrypt";
import { create } from "../utils/db.utils.js";

export const registrar = async (req, res) => {
  const {
    nombre,
    apellido,
    telefono,
    email,
    fecha_nacimiento,
    obra_social,
    dni,
    contrasenia,
  } = req.body;

  const datosUsuario = {
    nombre,
    apellido,
    telefono,
    email,
    fecha_nacimiento,
    obra_social,
    dni,
    contrasenia: await bcrypt.hash(contrasenia, 10),
  };

  try {
    const mensaje = await create("usuarios", datosUsuario);
    res.status(201).json({ mensaje });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
