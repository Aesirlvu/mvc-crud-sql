import connectDb from "../config/db.js";

const UserEntity = async () => {
  const connection = await connectDb();
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT,
      name VARCHAR(100),
      email VARCHAR(100),
      password VARCHAR(100),
      PRIMARY KEY(id)
    )
  `;

  await connection.execute(sql);
  console.log("La tabla de usuarios ha sido creada o ya existía.");
};

export default UserEntity;
