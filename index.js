const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to express app world with CI/CD. Happy lets do this ....");
});

app.get("/test", (req, res) => {
  res.send("app is running as expected");
});

let port = 3000
app.listen(port, () => {
  console.log("The app is running on port ", port);
});
