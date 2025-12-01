import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';

const router = Router();

router.get('/', (req, res) => res.send('Auth routes OK'));
router.post('/register', register);
router.post('/login', login);

export default router;
