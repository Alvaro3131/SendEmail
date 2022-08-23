import { pool } from '../database'

export const getRolUsuario = async (req, res) => {



    pool.query("CALL SP_LISTAR_ROLUSUARIO();", function (err, result) {
        try {
            return res.status(200).json(result[0]);
        } catch (error) {
            return res.status(500).json('Error al listar ROL');
        }
    });

};
export const getRolUsuarioId = async (req, res) => {

    const id = parseInt(req.params.id);
    
        pool.query("CALL SP_BUSCAR_ROLUSUARIO(?);", [id], function (err, result) {

            try {
                return res.status(200).json(result[0]);
            } catch (error) {
                return res.status(500).json('Error al buscar Rol ');
            }
        });
    

};
export const crearRolUusario = async (req, res) => {

    const { rol,usuario } = req.body;
    
        pool.query("CALL SP_INS_ROLUSUARIO(?,?);", [rol,usuario ], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'RolUsuario registrado correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al crear RolUusuario');
            }
        });
    


};
export const updateRolUsuario= async (req, res) => {

    const id = parseInt(req.params.id);
    const {rol,usuario  } = req.body;
    
        pool.query("CALL SP_UPDATE_ROLUSUARIO(?,?,?);", [ rol,usuario ,id], function (err, result) {


            try {
                return res.status(200).json({
                    message: 'RolUsuario actualizado correctamente'
                });

            } catch (error) {
                return res.status(500).json('Error al modificar RolUsuario');
            }
        });
    

};
export const deleteRolUsuario = async (req, res) => {

    const id = parseInt(req.params.id);
    
        pool.query("CALL SP_DEL_ROLUSUARIO(?);", [id], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'RolUsuario eliminada correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al eliminar RolUsuario');
            }

        });
    

};