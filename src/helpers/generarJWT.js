import jwt from "jsonwebtoken";

export const generarJWT = (id) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      id,
      process.env.JWT_SECRET,
      {
        // Se establece un tiempo de duración del token.
        expiresIn: 60 * 60,
      },
      (err, token) => {
        err ? reject(err) : resolve(token);
      }
    );
  });
};
