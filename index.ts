import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ msg: 'Hello World' });
});

app.listen(4000, () => {
    console.log('listening on port 4000');
});