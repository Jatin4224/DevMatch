const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");
//creating apis

//using json middleware so we can read body data
app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log(req.body);
  // logic to add data into a database
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added succesfully");
  } catch (err) {
    res.status(400).send("Error saving the user" + err.message);
  }
});

// feed API - Get all the users from database
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length == 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  const userEmails = req.body.emailId;

  const user = await User.findOne({ emailId: userEmails });

  if (!user) {
    res.send(404).send("user not found");
  } else {
    res.send(user);
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  const user = await User.findByIdAndDelete({ _id: userId });
  res.send("user selected deleted");
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  const user = await User.findByIdAndUpdate({ _id: userId }, data, {
    returnDocument: "after",
  });
  console.log(user);
  res.send("user updated success");
});
connectDb()
  .then(() => {
    console.log("db connection success");
  })
  .catch((err) => {
    console.log("db is not connected");
  });

app.listen(3000, () => {
  console.log("server is working fine");
});
