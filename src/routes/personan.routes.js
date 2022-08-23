
import { Router } from 'express';
import * as personan from '../controllers/personanatural.controller'
const router= Router()

const {checkToken} = require('../auth/token_validation');
router.get('/',checkToken, personan.getPersonaN);
router.get('/:id',checkToken, personan.getPersonaNId);
router.post('/',checkToken, personan.crearPersonaN);
router.put('/:id',checkToken, personan.updatePersonaN);
router.delete('/:id',checkToken, personan.deletePersonaN);
export default router;
