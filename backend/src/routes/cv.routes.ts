import { Router } from 'express';
import { uploadCV } from '../controllers/cv.controller';

const router = Router();

router.get('/', (req, res) => res.send('CV routes OK'));
router.post('/upload', uploadCV);

export default router;
