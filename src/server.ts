import app from './app';
import mongoose from 'mongoose';
import config from './app/config';
// const mongoose = require('mongoose');

async function main() {
  try {
    // await mongoose.connect(process.env.DATABASE_URL);
    //mongo db atlas use krbo
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`apps are listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
