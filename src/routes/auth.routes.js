import { Router} from 'express'
import * as authCtrl from '../controllers/auth.controller'
const router = Router()

router.post('/', authCtrl.login);

export default router;