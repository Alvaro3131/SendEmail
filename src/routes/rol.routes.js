import { Router } from 'express';
import * as rol from '../controllers/rol.controller'
const router= Router()

const {checkToken} = require('../auth/token_validation');
router.get('/',checkToken, rol.getRol);
router.get('/:id',checkToken, rol.getRolId);
router.post('/',checkToken, rol.crearRol);
router.put('/:id',checkToken, rol.updateRol);
router.delete('/:id',checkToken, rol.deleteRol);
export default router;
