import "dotenv/config";
import jwt from "jsonwebtoken";
import { findOne } from "../utils/db.utils.js";

export const validarJWT = async (token) => {
  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const usuario = await findOne("usuarios", `id = ?`, [id]);
    usuario.length > 0 ? usuario[0] : false;
  } catch (error) {
    // Si ocurre un error lo mostramos por consola y retornamos false.
    console.log(error);
    return false;
  }
};
