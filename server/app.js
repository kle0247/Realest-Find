const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const { User } = require("./db");

app.use("/dist", express.static("dist"));

app.use(express.json());

app.post("/api/sessions", async (req, res, next) => {
  try {
    const credentials = {
      username: req.body.username,
      password: req.body.password,
    };

    res.send( { token: await User.authenticate(credentials) } );
  } catch (ex) {
    next(ex);
  }
});

app.get('/api/sessions/:token', async(req, res, next) => {
    try{
        //another method on the model
        res.send(await User.findByToken(req.params.token));
    }
    catch(ex){
        next(ex);
    }
})

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

module.exports = app;
