import a from './a';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send({ success: true });
});

app.listen(3000, () => console.log('express ready'));

console.log(a);
