import connectDb from "../config/db.js";

const UserEntity = async () => {
  const connection = await connectDb();
  const sql = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT,
      nombre VARCHAR(50),
      apellido VARCHAR(50),
      telefono VARCHAR(10),
      email VARCHAR(100),
      fecha_nacimiento DATE,
      obra_social VARCHAR(100),
      dni CHAR(8),
      contrasenia VARCHAR(100),
      PRIMARY KEY(id)
    )
  `;

  await connection.execute(sql);
  console.log("La tabla de usuarios ha sido creada o ya existía.");
};

export default UserEntity;
