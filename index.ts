import express from 'express';
import remindersRoutes from './routes/reminders';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ msg: 'Hello World' });
});

app.use('/reminders', remindersRoutes);

app.listen(4000, () => {
    console.log('listening on port 4000');
});