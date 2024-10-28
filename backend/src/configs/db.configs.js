import mongoose from 'mongoose';
import { dbName } from '../contants.js';

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`);
    console.log(
      `\nDatabase Connected\nDatabase Name : ${dbName.toUpperCase()}`,
    );
  } catch (error) {
    console.error(
      `Database Connection Failed\nError Message : ${error.message}`,
    );
  }
};

export default connect;
