import mongoose from 'mongoose';
import 'dotenv/config'

async function db() {
    try {
        await mongoose.connect(process.env.DB_URL);

        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected to the database');
        });

        mongoose.connection.on('error', (err) => {
            console.error(`Mongoose connection error: ${err}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected from the database');
        });

        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('Mongoose disconnected on app termination');
            process.exit(0);
        });

        return mongoose.connection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // завершение процесса при ошибке подключения
    }
}

export default db;
