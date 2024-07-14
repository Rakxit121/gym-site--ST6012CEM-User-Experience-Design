const mongoose = require('mongoose');
const config = require('../../config');

const connectDB = async () => {
  try {
    await mongoose.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = { connectDB };