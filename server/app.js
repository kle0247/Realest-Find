const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const { User } = require("./db");
const sessions = require('./routes/sessions')


app.use("/dist", express.static("dist"));
app.use("/public", express.static("public"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const isLoggedIn = async(req, res, next) => {
  try {
    req.user = await User.findByToken(req.headers.authorization);
    next();
  }
  catch (ex) {
    next(ex);
  }
};


app.post("/api/sessions", async (req, res, next) => {
  try {
      const credentials = {
          username: req.body.username,
          password: req.body.password,
      };

      res.send({ token: await User.authenticate(credentials) });
  } catch (ex) {
      next(ex);
  }
});

app.get('/api/sessions', isLoggedIn, (req, res, next) => {
  try {
      res.send(req.user);
  }
  catch (ex) {
      next(ex);
  }
});

// app.use('/api/sessions', sessions);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

module.exports = app;
