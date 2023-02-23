import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
    // TODO Implement
    res.send('Register');
});

router.get('/signin', (req, res) => {
    // TODO Implement
    res.send('Login');
});

router.get('/password-reset', (req, res) => {
    // TODO Implement
    res.send('Password Reset');
});

router.get('/2fa', (req, res) => {
    // TODO Implement
    res.send('2 Factor Authentication');
});

export default router;