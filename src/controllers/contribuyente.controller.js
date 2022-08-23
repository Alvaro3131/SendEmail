import { pool } from "../database";

export const getContribuyente = async (req, res) => {
  pool.query("CALL SP_LISTAR_CONTRIBUYENTE();", function (err, result) {
    try {
      return res.status(200).json(result[0]);
    } catch (error) {
      return res.status(500).json("Error al listar contribuyente");
    }
  });
};
export const getContribuyenteId = async (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("CALL SP_BUSCAR_CONTRIBUYENTE(?);", [id], function (err, result) {
    try {
      return res.status(200).json(result[0]);
    } catch (error) {
      return res.status(500).json("Error al buscar contribuyente ");
    }
  });
};
export const crearContribuyente = async (req, res) => {
  const { id, ruc, correo, direccion, telefono } = req.body;

  pool.query(
    "CALL SP_INS_CONTRIBUYENTE(?,?,?,?,?);",
    [id, ruc, correo, direccion, telefono],
    function (err, result) {
      try {
        return res.status(200).json({
          message: "Contribuyente registrado correctamente",
        });
      } catch (error) {
        return res.status(500).json("Error al crear al Contribuyente");
      }
    }
  );
};
export const updateContribuyente = async (req, res) => {
  const id = parseInt(req.params.id);
  const { ruc, correo, direccion, telefono } = req.body;

  pool.query(
    "CALL SP_UPDATE_CONTRIBUYENTE(?,?,?,?,?);",
    [ruc, correo, direccion, telefono, id],
    function (err, result) {
      try {
        return res.status(200).json({
          message: "Contribuyente actualizado correctamente",
        });
      } catch (error) {
        return res.status(500).json("Error al modificar Contribuyente");
      }
    }
  );
};
export const deleteContribuyente = async (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("CALL SP_DEL_CONTRIBUYENTE(?);", [id], function (err, result) {
    try {
      return res.status(200).json({
        message: "Contribuyente eliminada correctamente",
      });
    } catch (error) {
      return res.status(500).json("Error al eliminar Contribuyente");
    }
  });
};
