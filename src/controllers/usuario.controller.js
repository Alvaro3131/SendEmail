import { pool } from "../database";
const helpers = require('../libs/helpers');
export const getUsuario = async (req, res) => {
  pool.query("CALL SP_LISTAR_USUARIO();", function (err, result) {
    try {
      return res.status(200).json(result[0]);
    } catch (error) {
      return res.status(500).json("Error al listar solicitud");
    }
  });
};
export const getUsuarioId = async (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("CALL SP_BUSCAR_USUARIO(?);", [id], function (err, result) {
    try {
      return res.status(200).json(result[0]);
    } catch (error) {
      return res.status(500).json("Error al buscar solicitud ");
    }
  });
};
export const validarUsuario = async (req, res) => {
  const { usuario, password } = req.body;

  pool.query(
    "SELECT u.ID_USUARIO, u.DNI, r.NO_ROL from usuario u join rol_usuario ru on ru.USUARIO_ID_USUARIO =u.ID_USUARIO join rol r on r.ID_ROL =ru.ROL_ID_ROL where u.DNI=? and u.PASSWORD=?;",
    [usuario, password],
    function (err, result) {
      try {
        return res.status(200).json(result[0]);
      } catch (error) {
        return res.status(500).json("Error al buscar usuario ");
      }
    }
  );
};
export const crearUsuario = async (req, res) => {
  const { dni, password } = req.body;

  pool.query(
    "CALL SP_INS_USUARIO(?,?);",
    [dni, password],
    function (err, result) {
      try {
        return res.status(200).json({
          message: "Usuario registrado correctamente",
        });
      } catch (error) {
        return res.status(500).json("Error al crear Usuario");
      }
    }
  );
};
export const registrarUsuario = async (req, res) => {
  const {
    dni,
    password,
    ruc,
    correo,
    direccion,
    telefono,
    nombre,
    paterno,
    materno,
    razon,
    valor,
  } = req.body;

  const pass=await helpers.encryptPassword(password);

  pool.query(
    "CALL SP_INS_USUARIO(?,?,?,?,?,?,?,?,?,?,?);",
    [
      dni,
      pass,
      ruc,
      correo,
      direccion,
      telefono,
      nombre,
      paterno,
      materno,
      razon,
      valor,
    ],
    function (err, result) {
      try {
        return res.status(200).json({
          message: "Usuario actualizado correctamente",
        });
      } catch (error) {
        return res.status(500).json("Error al modificar Usuario");
      }
    }
  );
};

export const deleteUsuario = async (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("CALL SP_DEL_USUARIO(?);", [id], function (err, result) {
    try {
      return res.status(200).json({
        message: "Usuario eliminada correctamente",
      });
    } catch (error) {
      return res.status(500).json("Error al eliminar Usuario");
    }
  });
};
