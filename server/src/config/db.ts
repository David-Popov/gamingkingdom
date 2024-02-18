import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myDatabase', {
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error:any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
