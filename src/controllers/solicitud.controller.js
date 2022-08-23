import { pool } from "../database";

export const getSolicitud = async (req, res) => {
  pool.query(
    "SELECT s.ID_SOLICITUD,u.DNI ,c.CORREO,c.TELEFONO,s.FECHA  ,s.ID_ET_SOLICITUD from solicitud s join contribuyente c on c.ID_USUARIO=s.ID_USUARIO join usuario u on u.ID_USUARIO=c.ID_USUARIO;",
    function (err, result) {
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar solicitud");
      }
    }
  );
};
export const getSolicitudfecha = async (req, res) => {
  const fecha = req.params.fecha;
  //   console.log(fecha);
  pool.query(
    "SELECT s.ID_SOLICITUD,u.DNI ,c.CORREO,c.TELEFONO,s.FECHA  ,s.ID_ET_SOLICITUD from solicitud s join contribuyente c on c.ID_USUARIO=s.ID_USUARIO join usuario u on u.ID_USUARIO=c.ID_USUARIO where s.FECHA=?;",
    [fecha],
    function (err, result) {
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar solicitud");
      }
    }
  );
};
export const getSolicitudetapa = async (req, res) => {
  const etapa = parseInt(req.params.etapa);
  //   console.log(etapa);
  pool.query(
    "SELECT s.ID_SOLICITUD,u.DNI ,c.CORREO,c.TELEFONO,s.FECHA  ,s.ID_ET_SOLICITUD from solicitud s join contribuyente c on c.ID_USUARIO=s.ID_USUARIO join usuario u on u.ID_USUARIO=c.ID_USUARIO where s.ID_ET_SOLICITUD=?;",
    [etapa],
    function (err, result) {
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar solicitud");
      }
    }
  );
};

export const getSolicitudesId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query("call SP_BUSCAR_SOLICITUD(?);", id, function (err, result) {
      if (err) throw err;
      return res.status(200).json(result[0]);
    });
  } catch (error) {
    return res.status(500).json("Error al listar documentos");
  }
};

export const crearSolicitud = async (req, res) => {
  const { idusuario, idetapa } = req.body;
  console.log({ idusuario, idetapa });

  pool.query(
    "CALL SP_INS_SOLICITUD(?,?);",
    [idusuario, idetapa],
    function (err, result) {
      try {
        return res.status(200).json({
          message: "Solicitud registrado correctamente",
        });
      } catch (error) {
        return res.status(500).json("Error al crear la Solicitud");
      }
    }
  );
};
export const updateSolicitud = async (req, res) => {
  const id = parseInt(req.params.id);
  const { idetapa } = req.body;

  pool.query(
    "CALL SP_UPDATE_SOLICITUD(?,?);",
    [idetapa, id],
    function (err, result) {
      try {
        return res.status(200).json({
          message: "Solicitud actualizado correctamente",
        });
      } catch (error) {
        return res.status(500).json("Error al modificar la solicitud");
      }
    }
  );
};
export const deleteSolicitud = async (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("CALL SP_DEL_SOLICITUD(?);", [id], function (err, result) {
    try {
      return res.status(200).json({
        message: "Solicitud eliminada correctamente",
      });
    } catch (error) {
      return res.status(500).json("Error al eliminar Solicitud");
    }
  });
};
