import express from 'express';
import { validationResult } from 'express-validator';

const signin = (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    return res.send('Login');
}

export { signin }
