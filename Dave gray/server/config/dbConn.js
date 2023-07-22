const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Access DATABASE_URL environment variable
    const dbUrl = process.env.DATABASE_URL;

    // Check if the DATABASE_URL is available
    if (!dbUrl) {
      throw new Error('DATABASE_URL is not defined in the environment');
    }

    // Connect to MongoDB
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Remove the options useCreateIndex and useFindAndModify
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

module.exports = connectDB;
