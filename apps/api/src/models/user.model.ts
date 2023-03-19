const mongooseSchema = require("mongoose");

const User = new mongooseSchema.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "user-data" }
);

const model = mongooseSchema.model("UserData", User);

module.exports = model;
