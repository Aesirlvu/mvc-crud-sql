import { create, findOne, findAll, update, remove } from "../utils/db.utils.js";

// export const createUsuario = async (req, res) => {
//   try {
//     const usuario = await create("usuarios", req.body);
//     console.log("Usuario creado: ", usuario.insertId);
//     return res.json({ message: "Usuario creado: ", usuario });
//   } catch (error) {
//     console.error("Error al crear usuario: ", error.message);
//     return res.status(400).json({ error: error.message });
//   }
// };

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await findAll("usuarios");
    console.log("Usuarios obtenidos: ", usuarios.length);
    return res.json({ usuarios });
  } catch (error) {
    console.error("Error al obtener usuarios: ", error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await findOne("usuarios", `id = ?`, [id]);
    if (usuario.length > 0) {
      console.log("Usuario obtenido: ", usuario[0].id);
    } else {
      console.log(`No se ha encontrado ningún usuario con el id ${id}`);
    }
    return res.json({ usuario });
  } catch (error) {
    console.error(`Error al obtener usuario con id ${id}: `, error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await update("usuarios", `id = ?`, [id], req.body);
    console.log("Usuario actualizado: ", usuario.changedRows);
    return res.json({ message: "Usuario actualizado: ", usuario });
  } catch (error) {
    console.error(`Error al actualizar usuario con id ${id}: `, error.message);
    return res.status(400).json({ error: error.message });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await remove("usuarios", `id = ?`, [id]);
    console.log("Usuario eliminado: ", usuario.affectedRows);
    return res.json({ message: "Usuario eliminado: ", usuario });
  } catch (error) {
    console.error(`Error al eliminar usuario con id ${id}: `, error.message);
    return res.status(500).json({ error: error.message });
  }
};
