import mongoose from 'mongoose';

const uri=process.env.MONGODB_URI_PRODUCTION
console.log(uri)

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`\nDatabase Connected`);
  } catch (error) {
    console.error(
      `Database Connection Failed\nError Message : ${error.message}`,
    );
  }
};

export default connect;
