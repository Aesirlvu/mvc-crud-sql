import connectDb from "../config/db.js";

const TurnosEntity = async () => {
  const connection = await connectDb();
  const sql = `
CREATE TABLE IF NOT EXISTS Turnos (
  id INT AUTO_INCREMENT,
  turno VARCHAR(100),
  descripcion VARCHAR(100),
  hora TIMESTAMP,
  PRIMARY KEY(id)
);
  `;

  await connection.execute(sql);
  console.log("La tabla de TURNOS ha sido creada o ya existía.");
};

export default TurnosEntity;
