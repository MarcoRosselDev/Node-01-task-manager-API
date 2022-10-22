/*

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Task", TaskSchema);
*/

// all

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
