import { Router } from 'express';
const router= Router()
const controller = require('../controllers/upload')

router.post('/', controller.upload,controller.uploadFile);

export default router;
