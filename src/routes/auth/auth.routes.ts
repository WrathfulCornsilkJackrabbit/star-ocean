import express from 'express';
import { body } from 'express-validator';
import { signin } from './../../controllers/auth.controller';

const router = express.Router();

router.get('/signup', (req: express.Request, res: express.Response) => {
    // TODO Implement
    res.send('Register');
});

router.post(
    '/signin',
    body('username')
        .exists()
        .isEmail()
        .normalizeEmail(),
    body('password')
        .exists()
        .isLength({ min: 5 })
    ,
    signin
);

router.get('/password-reset', (req: express.Request, res: express.Response) => {
    // TODO Implement
    res.send('Password Reset');
});

router.get('/2fa', (req: express.Request, res: express.Response) => {
    // TODO Implement
    res.send('2 Factor Authentication');
});

export default router;