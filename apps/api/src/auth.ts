require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/user.model");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECTION);

// Create User
app.post("/api/register", async (req, res, next) => {
  try {
    const user = await UserModel.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json({ user: user });
  } catch (error) {
    next(error);
  }
});

// Login
app.post("/api/login", async (req, res) => {
  const user = await UserModel.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
        password: user.password,
      },
      "secret123"
    );

    return res.json({ status: 200, user: token });
  } else {
    res.json({ status: 401, user: false });
  }
});

app.listen(1337, () => {
  console.log("Server is running on Port 1337");
});
