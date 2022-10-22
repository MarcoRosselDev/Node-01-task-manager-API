const Task = require("../models/Task");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// podemos atrapar los errores y denegar el input o obtencion si no cumple los requisitos minimos

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
