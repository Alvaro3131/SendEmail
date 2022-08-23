import { pool } from '../database'

export const getEtapaSolicitud = async (req, res) => {

    try {
        
            pool.query("CALL SP_LISTAR_ETPSOLICITUD();", function (err, result) {
                if (err) throw err;
                return res.status(200).json(result[0]);
            });
        

    } catch (error) {
        return res.status(500).json('Error al listar contribuyente');
    }
};
export const getEtapaSolicitudId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
       
            pool.query("CALL SP_BUSCAR_ETPSOLICITUD(?);", [id], function (err, result) {
                if (err) throw err;
                return res.status(200).json(result[0]);
            });
       
    } catch (error) {
        return res.status(500).json('Error al buscar etapa solicitud');
    }
};
export const crearEtapaSolicitud = async (req, res) => {
    try {
        const { nombre } = req.body;
        
            pool.query("CALL SP_INS_ETPSOLICITUD(?);", [nombre], function (err, result) {
                if (err) throw err;
                return res.status(200).json({
                    message: 'Etapa Solicitud registrado correctamente'
                });
            });
       

    } catch (error) {
        return res.status(500).json('Error al crear la etapa');
    }
};
export const updateEtapaSolicitud = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre } = req.body;
      
            pool.query("CALL SP_UPDATE_ETPSOLICITUD(?,?);", [nombre, id], function (err, result) {
                if (err) throw err;
                return res.status(200).json({
                    message: 'Etapa Solicitud actualizado correctamente'
                });
            });
       
    } catch (error) {
        return res.status(500).json('Error al modificar etapa');
    }
};
export const deleteEtapaSolicitud = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
      
            pool.query("CALL SP_DEL_ETPSOLICITUD(?);", [id], function (err, result) {
                if (err) throw err;
                return res.status(200).json({
                    message: 'Etapa Solicitud eliminada correctamente'
                });
            });
       
    } catch (error) {
        return res.status(500).json('Error al eliminar etapa');
    }
};