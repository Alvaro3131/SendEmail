import { pool } from "../database";

export const getDocumento = async (req, res) => {
  try {
    pool.query("CALL SP_LISTAR_DOCUMENTO();", function (err, result) {
      if (err) throw err;
      return res.status(200).json(result[0]);
    });
  } catch (error) {
    return res.status(500).json("Error al listar documentos");
  }
};

export const getDocumentoContribuyente = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query(
      "select d.ID_DOCUMENTO , d.ARCHIVO , d.OBSERVACIONES , td.N_T_DOCUMENTO , s.ID_SOLICITUD, s.ID_ET_SOLICITUD, es.N_ET_SOLICITUD from tipo_documento td join documento d on td.ID_T_DOCUMENTO = d.ID_T_DOCUMENTO join solicitud s on d.ID_SOLICITUD = s.ID_SOLICITUD join etapa_solicitud es on s.ID_ET_SOLICITUD = es.ID_ET_SOLICITUD  where s.ID_USUARIO = ?; ",
      [id],
      function (err, result) {
        return res.status(200).json(result);
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar documentos");
  }
};

export const getDocumentoSolicitud = async (req, res) => {
  try {
    const id = req.params.id;
    pool.query(
      "select d.ARCHIVO URL,td.N_T_DOCUMENTO,d.OBSERVACIONES,d.ID_DOCUMENTO from documento d  join tipo_documento td on d.ID_T_DOCUMENTO =td.ID_T_DOCUMENTO where d.ID_SOLICITUD=?;",
      [id],
      function (err, result) {
        if (err) throw err;
        return res.status(200).json(result);
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar documentos");
  }
};
export const getDocumentoId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    pool.query("CALL SP_BUSCAR_DOCUMENTO(?);", [id], function (err, result) {
      if (err) throw err;
      return res.status(200).json(result[0]);
    });
  } catch (error) {
    return res.status(500).json("Error al buscar ");
  }
};
export const crearDocumento2 = async (req, res) => {
  try {
    const { ARCHIVO, ID_SOLICITUD, ID_T_DOCUMENTO, OBSERVACION } = req.body;
    console.log(ARCHIVO);
     pool.query(
      "insert into documento(archivo,id_solicitud,id_t_documento,observaciones)values(?,?,?,?)",
      [ARCHIVO, ID_SOLICITUD, ID_T_DOCUMENTO, OBSERVACION]
    );
    return res
      .status(200)
      .json({ message: "persona registrado correctamente" });
  } catch (e) {
    return res.status(500).json("Error al crear persona " + e);
  }

};


export const crearDocumento= async (req, res) => {
  try {
      const { nombre,idsolicitud,idtipo } = req.body;
      console.log(nombre);
          pool.query("CALL SP_INS_DOCUMENTO(?,?,?);", [nombre,idsolicitud,idtipo], function (err, result) {
            
              try {
                  return res.status(200).json({
                      message: 'Documento registrado correctamente'
                  });
              } catch (error) {
                  return res.status(500).json('Error al guardar Documento');
              }
          });
    

  } catch (error) {
      return res.status(500).json('Error al crear la documento');
  }
};

export const updateDocumento = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { obserbacion } = req.body;

    pool.query(
      "CALL SP_UPDATE_DOCUMENTO(?,?);",
      [obserbacion, id],
      function (err, result) {
        if (err) throw err;
        return res.status(200).json({
          message: "Documento actualizado correctamente",
        });
      }
    );
  } catch (error) {
    return res.status(500).json("Error al modificar DOCUMENTO");
  }
};

export const updateDocumento2 = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { archivo } = req.body;
    console.log(archivo);
    pool.query(
      "  update documento set  ARCHIVO = ? where ID_DOCUMENTO=?;",
      [archivo, id],
      function (err, result) {
        if (err) throw err;
        return res.status(200).json({
          message: "Documento actualizado correctamente",
        });
      }
    );
  } catch (error) {
    return res.status(500).json("Error al modificar DOCUMENTO");
  }
};

export const deleteEtapaSolicitud = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    pool.query("CALL SP_DEL_DOCUMENTO(?);", [id], function (err, result) {
      if (err) throw err;
      return res.status(200).json({
        message: "Etapa Solicitud eliminada correctamente",
      });
    });
  } catch (error) {
    return res.status(500).json("Error al eliminar etapa");
  }
};
