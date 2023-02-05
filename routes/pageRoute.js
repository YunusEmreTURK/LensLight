import exrpess from 'express';
import * as pageController from '../controllers/pageController.js'; // * as yazma sebebimiz birden fazla eleman export ettiğimiz için

const router = exrpess.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);

export default router;