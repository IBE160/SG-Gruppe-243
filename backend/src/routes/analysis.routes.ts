import { Router } from 'express';
import { analyzeCV, generateLetter } from '../controllers/analysis.controller';

const router = Router();

router.get('/', (req, res) => res.send('Analysis routes OK'));
router.post('/analysis', analyzeCV);
router.post('/application-generation', generateLetter);


export default router;
