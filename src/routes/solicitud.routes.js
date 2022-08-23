
import { Router } from 'express';
import * as solicitud from '../controllers/solicitud.controller'
const router= Router()
const {checkToken} = require('../auth/token_validation');
router.get('/',checkToken, solicitud.getSolicitud);
router.get('/:fecha',checkToken, solicitud.getSolicitudfecha);
router.get('/etapa/:etapa',checkToken, solicitud.getSolicitudetapa);
router.get('/user/:id',checkToken, solicitud.getSolicitudesId);
router.post('/',checkToken, solicitud.crearSolicitud);
router.put('/:id',checkToken, solicitud.updateSolicitud);
router.delete('/:id',checkToken, solicitud.deleteSolicitud);

export default router;
