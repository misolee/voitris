const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const Scoreboard = require("./models/scoreboard");
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port " + ${PORT}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/addscore", (req, res) => {
  const score = new Scoreboard(req.body);
  score.save()
    .then(item => {
      res.send("score saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/getAllScores", (req, res) => {
  Scoreboard.find()
    .sort({ score: -1 })
    .limit(5)
    .then(scores => {
      res.json(scores);
    });
});

