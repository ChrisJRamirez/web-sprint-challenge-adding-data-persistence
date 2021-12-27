// build your `/api/tasks` router here
const express = require("express");
const taskRouter = express.Router();
const Task = require("./model");

taskRouter.get("/", (req, res, next) => {
  Task.getTasks()
  .then(task => {
    res.status(200).json(task)
  })
  .catch(next)
});

taskRouter.post("/", (req, res, next) => {
  const task = req.body

  Task.add(task)
    .then(newTask => {
      res.status(201).json(newTask)
    })
    .catch(next)
});

module.exports = taskRouter;