const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const app = express();

// body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Imports routes
const parent = require("./routes/api/parents");

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Mongo DB Connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/parents", parent);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Running "));
