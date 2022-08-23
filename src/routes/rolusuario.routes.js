import { Router } from 'express';
import * as rolusuario from '../controllers/rolusuario.controller'
const router= Router()

const {checkToken} = require('../auth/token_validation');
router.get('/',checkToken, rolusuario.getRolUsuario);
router.get('/:id',checkToken, rolusuario.getRolUsuarioId);
router.post('/',checkToken, rolusuario.crearRolUusario);
router.put('/:id',checkToken, rolusuario.updateRolUsuario);
router.delete('/:id',checkToken, rolusuario.deleteRolUsuario);
export default router;
