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
app.post("/api/register", async (req, res) => {
  try {
    const user = await UserModel.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({ status: 200, response: res.body });
  } catch (error) {
    res.json({ status: 401 });
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
    res.json({ status: "not found", user: false });
  }
});

// // Get users data
// // /quote is just a filler, maybe '/' would work better
// app.get("/quote", async (req, res) => {
//   const token = req.headers["x-access-token"];

//   try {
//     const decoded = jwt.verify(token, "secret123");
//     const username = decoded.username;
//     const user = await User.findOne({ username });

//     // Could be everything the user has
//     return { status: 200, quote: user.quote };
//   } catch {
//     console.log("error");
//     req.json({ status: "error", error: "invalid token" });
//   }
// });

// // POST users data
// // /quote is just a filler, maybe '/' would work better
// app.get("/quote", async (req, res) => {
//   const token = req.headers["x-access-token"];

//   try {
//     const decoded = jwt.verify(token, "secret123");
//     const username = decoded.username;
//     const user = await User.updateOne(
//       { username },
//       { $set: { quote: req.body.quote } }
//     );

//     // Could be everything the user has
//     return res.json({ status: 200, quote: user.quote });
//   } catch {
//     console.log("error");
//     req.json({ status: "error", error: "invalid token" });
//   }
// });

app.listen(1337, () => {
  console.log("Server is running on Port 1337");
});
