const mongooseSchema = require("mongoose");

const user = new mongooseSchema.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "user-data" }
);

const model = mongooseSchema.model("UserData", user);

module.exports = model;
