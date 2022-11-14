import express from 'express';
import Reminder from '../models/reminder';
import HasTitle from '../interfaces/HasTitle';

const router = express.Router();
const reminders: Reminder[] = [];

router.get('/', (req, res) => {
    res.status(200).json(reminders);
});

router.post('/', (req, res) => {
    const { title } = req.body as HasTitle;
    const reminder = new Reminder(title);
    reminders.push(reminder);
    res.status(201).json(reminder);
});

export default router;