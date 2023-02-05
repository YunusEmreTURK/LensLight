import exrpess from 'express';
import * as photoController from '../controllers/photoController.js';

const router = exrpess.Router();

router.route('/').post(photoController.createPhoto); // buradaki "/"" "/photos" un devamı olan yani /photos/. "/" yerine "/test olsaydı /photos/test yönlendirmesi anlamına gelirdi"

export default router;