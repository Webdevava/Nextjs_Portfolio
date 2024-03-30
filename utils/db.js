import mongoose from 'mongoose';

let isConnected;

export async function connectMongoDB() {
    if (isConnected) {
        return;
    }

    await mongoose.connect(process.env.MONGO_URL);

    isConnected = true;
}

export async function disconnectMongoDB() {
    if (!isConnected) {
        return;
    }

    if (process.env.NODE_ENV === 'production') {
        await mongoose.disconnect();
        isConnected = false;
    }
}
