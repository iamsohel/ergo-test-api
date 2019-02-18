
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({

  name: String,
  location: {
    type: { type: String },
    coordinates: []
  }
});

usersSchema.index({ location: "2dsphere" });

const Users = mongoose.model("Users", usersSchema);

exports.Users = Users;
