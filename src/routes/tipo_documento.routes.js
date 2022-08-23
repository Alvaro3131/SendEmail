import { Router } from 'express';
import * as tipodocumento from '../controllers/tipo_documento.controller'
const router= Router()

const {checkToken} = require('../auth/token_validation');
router.get('/',checkToken, tipodocumento.getTDocumento);
router.get('/:id',checkToken, tipodocumento.getTDocumentoId);
router.post('/',checkToken, tipodocumento.crearTDocumento);
router.put('/:id',checkToken, tipodocumento.updateTDocumento);
router.delete('/:id',checkToken, tipodocumento.deleteTDocumento);
export default router;
