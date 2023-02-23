import express from 'express';

const router = express.Router();

router.get('/signup', (req: express.Request, res: express.Response) => {
    // TODO Implement
    res.send('Register');
});

router.get('/signin', (req: express.Request, res: express.Response) => {
    // TODO Implement
    res.send('Login');
});

router.get('/password-reset', (req: express.Request, res: express.Response) => {
    // TODO Implement
    res.send('Password Reset');
});

router.get('/2fa', (req: express.Request, res: express.Response) => {
    // TODO Implement
    res.send('2 Factor Authentication');
});

export default router;