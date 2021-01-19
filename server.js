const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aqcalc_db", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.set("view engine", "pug");

app.use(routes);

// start server listening
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});