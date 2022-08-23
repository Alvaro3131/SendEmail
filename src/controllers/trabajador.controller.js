import { pool } from '../database'

export const getTrabajador = async (req, res) => {



    pool.query("CALL SP_LISTAR_TRABAJADOR();", function (err, result) {
        try {
            return res.status(200).json(result[0]);
        } catch (error) {
            return res.status(500).json('Error al listar solicitud');
        }
    });

};
export const getTrabajadorId = async (req, res) => {

    const id = parseInt(req.params.id);
    
        pool.query("CALL SP_BUSCAR_TRABAJADOR(?);", [id], function (err, result) {

            try {
                return res.status(200).json(result[0]);
            } catch (error) {
                return res.status(500).json('Error al buscar solicitud ');
            }
        });
    

};
export const crearTrabajador = async (req, res) => {

    const { nombre,apellido,idusuario } = req.body;
   
        pool.query("CALL SP_INS_TRABAJADOR(?,?,?);", [nombre,apellido,idusuario], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'Trabajador registrado correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al crear Trabajador');
            }
        });
   


};
export const updateTrabajador= async (req, res) => {

    const id = parseInt(req.params.id);
    const { nombre,apellido } = req.body;
    
        pool.query("CALL SP_UPDATE_TRABAJADOR(?,?,?);", [nombre,apellido,id], function (err, result) {


            try {
                return res.status(200).json({
                    message: 'Trabajador actualizado correctamente'
                });

            } catch (error) {
                return res.status(500).json('Error al modificar Trabajador');
            }
        });
  

};
export const deleteTrabajador = async (req, res) => {

    const id = parseInt(req.params.id);
    
        pool.query("CALL SP_DEL_TRABAJADOR(?);", [id], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'Trabajador eliminada correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al eliminar Trabajador');
            }

        });
   

};