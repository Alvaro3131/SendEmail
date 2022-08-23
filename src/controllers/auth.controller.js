import { pool } from "../database";
const jwt = require("jsonwebtoken");
const secret = "leidy-decret-access-token";
const refreshTokenSecret = "leidy-decret-refresh-access-token";
const port = 2000;
const tokenLife = 900;
const refreshTokenLife = 86400;
const helpers = require("../libs/helpers");
const bcrypt = require("bcryptjs");
const refreshTokens = [];

export const login = async (req, res) => {
  const { username, password } = req.body;

  pool.query(
    "SELECT u.ID_USUARIO, u.DNI, r.NO_ROL, u.PASSWORD from usuario u join rol_usuario ru on ru.USUARIO_ID_USUARIO =u.ID_USUARIO join rol r on r.ID_ROL =ru.ROL_ID_ROL  WHERE DNI=?;",
    [username],
    function (err, result) {
      try {
        if (result[0].length != 0) {
          const passold = String(result[0].PASSWORD);
          if (bcrypt.compareSync(password, passold)) {
            const user = {
              dni: result[0].DNI,
              id: result[0].ID_USUARIO,
              rol: result[0].NO_ROL,
            };
            const accessToken = jwt.sign({ user }, secret, {
              expiresIn: "100000s",
            });
            const refreshToken = jwt.sign({ user }, refreshTokenSecret);
            refreshTokens.push(refreshToken);
            return res.status(200).json({
              accessToken,
              refreshToken,
            });
          } else {
            return res.status(400).json("Username o Password incorrectos...!");
          }
        }
        return res.status(400).json("Username o Password incorrectos...!");
      } catch (error) {
        return res.status(400).json("Error al VALIDAR USUARIO ");
      }
    }
  );
};

export const token = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.sendStatus(401);
    }
    if (!refreshTokens.includes(token)) {
      return res.sendStatus(403);
    }
    jwt.verify(token, config.refreshTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
    });
  } catch (e) {
    console.log(e);
  }
};
