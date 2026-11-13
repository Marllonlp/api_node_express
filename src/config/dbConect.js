import "dotenv/config"
import mongoose, { mongo } from 'mongoose';

async function connectNaDatabase() {
    mongoose.connect(process.env.DB_MONGO);

    return mongoose.connection;
};

export default connectNaDatabase;


