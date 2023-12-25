import mongoose from 'mongoose';

const connectDB = async () => {
   mongoose.set('strictQuery', true);
   await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
         console.log('MongoDB Connected');
      })
      .catch((error) => {
         console.log('MongoDB error', error);
         process.exit(1);
      });
};

export default connectDB;