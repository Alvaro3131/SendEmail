
import { Router } from 'express';
import * as personaj from '../controllers/personajuridica.controller'
const router= Router()

const {checkToken} = require('../auth/token_validation');
router.get('/',checkToken, personaj.getPersonaJ);
router.get('/:id',checkToken, personaj.getPersonaJId);
router.post('/',checkToken, personaj.crearPersonaJ);
router.put('/:id',checkToken, personaj.updatePersonaJ);
router.delete('/:id',checkToken, personaj.deletePersonaJ);
export default router;
