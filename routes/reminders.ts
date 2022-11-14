import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(201).json({ msg: 'List of all reminders' });
});

export default router;