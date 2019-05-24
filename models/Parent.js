const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ParentSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  
  },
  address: {
    type: String,
    required: true
  },
  phoneno: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Parent = mongoose.model("parents", ParentSchema);
