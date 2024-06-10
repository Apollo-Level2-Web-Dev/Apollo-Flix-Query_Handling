/* eslint-disable no-console */
import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { seed } from "./utils/seeding";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    app.listen(config.port, () => {
      seed();
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
