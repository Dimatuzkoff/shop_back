import express from 'express';
import router from '../routs/index.js';
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://dimatuzkoff:5uPMUnhRxmzsA3cx@cluster0.ogdrcr6.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


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