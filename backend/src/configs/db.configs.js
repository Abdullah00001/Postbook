import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI_DEV || process.env.MONGODB_URI_PRODUCTION}`,
    );
    console.log(`\nDatabase Connected`);
  } catch (error) {
    console.error(
      `Database Connection Failed\nError Message : ${error.message}`,
    );
  }
};

export default connect;
