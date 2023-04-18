const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
require("./connection");
const UserModel = require("./models/user_Models");

UserModel({
  name: "Ankit",
  email: "test@gmail.com",
//   phone: "999999999",
}).save();

app.listen(PORT, () => {
  console.log(`Server is running on port no: ${PORT}`);
});
