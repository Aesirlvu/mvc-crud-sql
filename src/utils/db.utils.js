import connectDb from "../config/db.js";

// Función genérica para ejecutar una consulta SQL con parámetros
const executeQuery = async (query, values = []) => {
  const connection = await connectDb();
  try {
    const [result] = await connection.query(query, values);
    return result;
  } finally {
    await connection.end();
  }
};
// Insertar un nuevo registro y registrar un mensaje descriptivo
export const create = async (table, data) => {
  const query = `
  INSERT INTO ${table} 
  SET ?
  `;
  const result = await executeQuery(query, [data]);
  console.log(
    `Se ha insertado un nuevo registro en la tabla ${table} con el ID: ${result.insertId}`
  );
  return result;
};

// Obtener todos los registros de una tabla y registrar un mensaje descriptivo
export const findAll = async (table) => {
  const query = `SELECT * FROM ${table}`;
  const results = await executeQuery(query);
  console.log(
    `Se han obtenido ${results.length} registros de la tabla ${table}`
  );
  return results;
};

// Buscar un registro por una condición y registrar un mensaje descriptivo
export const findOne = async (table, whereClause, values = []) => {
  const query = `SELECT * FROM ${table} WHERE ${whereClause}`;
  const results = await executeQuery(query, values);
  if (results.length > 0) {
    console.log(
      `Se ha encontrado un registro en la tabla ${table} con el ID: ${results[0].id}`
    );
  } else {
    console.log(
      `No se ha encontrado ningún registro en la tabla ${table} que cumpla con la condición: ${whereClause}`
    );
  }
  return results;
};

// Actualizar un registro existente y registrar un mensaje descriptivo
export const update = async (table, whereClause, values = [], data) => {
  const query = `UPDATE ${table} SET ? WHERE ${whereClause}`;
  const result = await executeQuery(query, [data, ...values]);
  console.log(
    `Se ha actualizado el registro con el ID: ${values[0]} en la tabla ${table}. ${result.changedRows} fila(s) afectada(s)`
  );
  return result;
};

// Eliminar un registro y registrar un mensaje descriptivo
export const remove = async (table, whereClause, values = []) => {
  const query = `DELETE FROM ${table} WHERE ${whereClause}`;
  const result = await executeQuery(query, values);
  console.log(
    `Se ha eliminado el registro con el ID: ${values[0]} de la tabla ${table}. ${result.affectedRows} fila(s) afectada(s)`
  );
  return result;
};
