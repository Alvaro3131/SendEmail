import { pool } from '../database'

export const getTDocumento = async (req, res) => {



    pool.query("CALL SP_LISTAR_TDOCUMENTO();", function (err, result) {
        try {
            return res.status(200).json(result[0]);
        } catch (error) {
            return res.status(500).json('Error al listar solicitud');
        }
    });

};
export const getTDocumentoId = async (req, res) => {

    const id = parseInt(req.params.id);
    
        pool.query("CALL SP_BUSCAR_TDOCUMENTO(?);", [id], function (err, result) {

            try {
                return res.status(200).json(result[0]);
            } catch (error) {
                return res.status(500).json('Error al buscar solicitud ');
            }
        });
    

};
export const crearTDocumento = async (req, res) => {

    const { nombre } = req.body;
   
        pool.query("CALL SP_INS_TDOCUMENTO(?);", [nombre], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'Tipo de Documento registrado correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al crear Tipo de Documento');
            }
        });
   


};
export const updateTDocumento= async (req, res) => {

    const id = parseInt(req.params.id);
    const { nombre } = req.body;
    
        pool.query("CALL SP_UPDATE_TDOCUMENTO(?,?);", [nombre,id], function (err, result) {


            try {
                return res.status(200).json({
                    message: 'Tipo de Documento actualizado correctamente'
                });

            } catch (error) {
                return res.status(500).json('Error al modificar  Tipo de Documento');
            }
        });
  

};
export const deleteTDocumento = async (req, res) => {

    const id = parseInt(req.params.id);
    
        pool.query("CALL SP_DEL_TDOCUMENTO(?);", [id], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'Tipo de Documento eliminada correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al eliminar Tipo de Documento');
            }

        });
    

};