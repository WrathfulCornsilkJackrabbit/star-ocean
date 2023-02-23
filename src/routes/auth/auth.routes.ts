import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
    res.send('Register');
});

router.get('/signin', (req, res) => {
    res.send('Login');
});

router.get('/password-reset', (req, res) => {
    res.send('Password Reset');
});


export default router;