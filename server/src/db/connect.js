import mongoose from 'mongoose';

export async function connectDatabase(uri) {
  if (!uri) {
    throw new Error('MONGODB_URI is required');
  }

  mongoose.set('strictQuery', true);

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000,
  });
}
