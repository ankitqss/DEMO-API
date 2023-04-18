const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database Connected Successfully !!");
  })
  .catch((err) => {
    console.error(`Unable to connect to the server: ${err}`);
  });

module.exports = mongoose;
