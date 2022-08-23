import { pool } from '../database'

export const getPersonaJ = async (req, res) => {



    pool.query("CALL SP_LISTAR_PERSONAJ();", function (err, result) {
        try {
            return res.status(200).json(result[0]);
        } catch (error) {
            return res.status(500).json('Error al listar solicitud');
        }
    });

};
export const getPersonaJId = async (req, res) => {

    const id = parseInt(req.params.id);
    
        pool.query("CALL SP_BUSCAR_PERSONAJ(?);", [id], function (err, result) {

            try {
                return res.status(200).json(result[0]);
            } catch (error) {
                return res.status(500).json('Error al buscar solicitud ');
            }
        });
   

};
export const crearPersonaJ = async (req, res) => {

    const { razon,idusuario } = req.body;
    
        pool.query("CALL SP_INS_PERSONAJ(?,?);", [razon,idusuario], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'Persona Juridica registrado correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al crear a la persona Juridica');
            }
        });
   


};
export const updatePersonaJ = async (req, res) => {

    const id = parseInt(req.params.id);
    const { razon } = req.body;
    pool.connect(function (err) {
        pool.query("CALL SP_UPDATE_PERSONAJ(?,?);", [razon,id], function (err, result) {


            try {
                return res.status(200).json({
                    message: 'Persona Juridica actualizado correctamente'
                });

            } catch (error) {
                return res.status(500).json('Error al modificar a persona juridica');
            }
        });
    });

};
export const deletePersonaJ = async (req, res) => {

    const id = parseInt(req.params.id);
    pool.connect(function (err) {
        pool.query("CALL SP_DEL_PERSONAJ(?);", [id], function (err, result) {
            try {
                return res.status(200).json({
                    message: 'Persona Juridica eliminada correctamente'
                });
            } catch (error) {
                return res.status(500).json('Error al eliminar Persona Juridica');
            }

        });
    });

};