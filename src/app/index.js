import express from 'express';
import router from '../routs/index.js';

const app = express();

app.use(router);

//midelware 1
app.use(function (req, res, next) {
    next();
    // res.send('Hello World')
})
//midelware 2
app.use(function (req, res) {
    res.send('2')
})

//midelware 3
app.use(function (req, res) {
    res.send('3 ')
})

export default app