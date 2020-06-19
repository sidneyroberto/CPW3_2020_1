import {
    Router
} from 'express';

const router = Router();

router.get('/', (req, res) => res.render('login'));

router.get('/home', (req, res) => res.render('home'));

export default router;