import { Router } from 'express';
import * as trabajador from '../controllers/trabajador.controller'
const router= Router()
const {checkToken} = require('../auth/token_validation');
router.get('/',checkToken, trabajador.getTrabajador);
router.get('/:id',checkToken, trabajador.getTrabajadorId);
router.post('/',checkToken, trabajador.crearTrabajador);
router.put('/:id',checkToken, trabajador.updateTrabajador);
router.delete('/:id',checkToken, trabajador.deleteTrabajador);
export default router;
