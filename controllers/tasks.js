const Task = require("../models/Task");
const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = async (req, res, next) => {
  res.status(200).json(req.body);
};
const deleteTask = async (req, res, next) => {
  res.status(200).json(req.body);
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
};
