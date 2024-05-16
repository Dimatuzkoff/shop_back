import mongoose from 'mongoose';

function db() {
    mongoose.connect('mongodb+srv://dimatuzkoff:5uPMUnhRxmzsA3cx@cluster0.ogdrcr6.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0');
}

export default db