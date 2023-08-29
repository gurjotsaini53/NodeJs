const express = require("express");
const app = express();

const fs = require("fs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  //   console.log(username + " " + password);
  if (username === user.password && password === user.password) {
    res.send("Welcome to DashBoard");
  } else {
    res.send("Unauthorized");
  }
});

app.listen("2000", () => {
  console.log("Server is running on port 2000");
});
