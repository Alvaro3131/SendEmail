import { pool } from '../database'

export const getRol = async (req, res) => {



    pool.query("CALL SP_LISTAR_ROL();", function (err, result) {
        try {
            return res.status(200).json(result[0]);
        } catch (error) {
            return res.status(500).json('Error al listar ROL');
        }
    });

};
export const getRolId = async (req, res) => {

    const id = parseInt(req.params.id);
   
        pool.query("CALL SP_BUSCAR_ROL(?);", [id], function (err, result) {

            try {
                return res.status(200).json(result[0]);
            } catch (error) {
                return res.status(500).json('Error al buscar Rol ');
            }
        });
   

};
export const crearRol = async (req, res) => {

    const { nombre } = req.body;
    
        pool.query("CALL SP_INS_ROL(?);", [nombre ], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'Rol registrado correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al crear Rol');
            }
        });
    


};
export const updateRol= async (req, res) => {

    const id = parseInt(req.params.id);
    const {nombre  } = req.body;
    
        pool.query("CALL SP_UPDATE_ROL(?,?);", [ nombre ,id], function (err, result) {


            try {
                return res.status(200).json({
                    message: 'Rol actualizado correctamente'
                });

            } catch (error) {
                return res.status(500).json('Error al modificar Rol');
            }
        });
    

};
export const deleteRol = async (req, res) => {

    const id = parseInt(req.params.id);
    
        pool.query("CALL SP_DEL_ROL(?);", [id], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'ROL eliminada correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al eliminar ROL');
            }

        });
    

};