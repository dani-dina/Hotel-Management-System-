import mongoose from "mongoose";
import {NODE_ENV} from './env.js'

if(!MONGO_URI) {
  throw new Error('Please Define the MONGO URI');
}
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false, // deprecated in Mongoose 6+
      // useCreateIndex: true, // deprecated in Mongoose 6+
    });

    console.log(`Successfully connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error occurred while connecting to DB:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
