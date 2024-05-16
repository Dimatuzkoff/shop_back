import express from 'express';
import router from '../routs/index.js';
import bodyParser from 'body-parser';
import db from './db.js';
import mongoose from 'mongoose';
// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

db();
const app = express();

app.use(bodyParser.json()); // для парсинга application/json
app.use(bodyParser.urlencoded({ extended: true })); // для парсинга application/x-www-form-urlencoded

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