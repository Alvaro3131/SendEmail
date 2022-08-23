
import { Router } from 'express';
import * as contribuyente from '../controllers/contribuyente.controller'
const router= Router()

const {checkToken} = require('../auth/token_validation');
router.get('/',checkToken, contribuyente.getContribuyente);
router.get('/:id',checkToken, contribuyente.getContribuyenteId);
router.post('/',checkToken, contribuyente.crearContribuyente);
router.put('/:id',checkToken, contribuyente.updateContribuyente);
router.delete('/:id',checkToken, contribuyente.deleteContribuyente);
export default router;
