const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    default: 123456789,
  },
});

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;
