
import { Router } from 'express';
import * as etapasolicitud from '../controllers/etapasolicitud.controller'
const router= Router()

const {checkToken} = require('../auth/token_validation');
router.get('/',checkToken, etapasolicitud.getEtapaSolicitud);
router.get('/:id',checkToken, etapasolicitud.getEtapaSolicitudId);
router.post('/',checkToken, etapasolicitud.crearEtapaSolicitud);
router.put('/:id',checkToken, etapasolicitud.updateEtapaSolicitud);
router.delete('/:id',checkToken, etapasolicitud.deleteEtapaSolicitud);
export default router;
