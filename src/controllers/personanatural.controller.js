import { pool } from '../database'

export const getPersonaN = async (req, res) => {



    pool.query("CALL SP_LISTAR_PERSONAN();", function (err, result) {
        try {
            return res.status(200).json(result[0]);
        } catch (error) {
            return res.status(500).json('Error al listar solicitud');
        }
    });

};
export const getPersonaNId = async (req, res) => {

    const id = parseInt(req.params.id);
    
        pool.query("CALL SP_BUSCAR_PERSONAN(?);", [id], function (err, result) {

            try {
                return res.status(200).json(result[0]);
            } catch (error) {
                return res.status(500).json('Error al buscar solicitud ');
            }
        });
    

};
export const crearPersonaN = async (req, res) => {

    const { nombre,paterno,materno,idusuario } = req.body;
   
        pool.query("CALL SP_INS_PERSONAN(?,?,?,?);", [nombre,paterno,materno,idusuario], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'Persona Natural registrado correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al crear a la persona Natural');
            }
        });
   


};
export const updatePersonaN = async (req, res) => {

    const id = parseInt(req.params.id);
    const { nombre,paterno,materno } = req.body;
    
        pool.query("CALL SP_UPDATE_PERSONAN(?,?,?,?);", [nombre,paterno,materno,id], function (err, result) {


            try {
                return res.status(200).json({
                    message: 'Persona Natural actualizado correctamente'
                });

            } catch (error) {
                return res.status(500).json('Error al modificar a persona Natural');
            }
        });
    

};
export const deletePersonaN = async (req, res) => {

    const id = parseInt(req.params.id);
    
        pool.query("CALL SP_DEL_PERSONAN(?);", [id], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'Persona Natural eliminada correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al eliminar Persona Natural');
            }

        });
  

};