// build your `/api/projects` router here
const express = require("express");
const projectRouter = express.Router();
const Project = require("./model");

projectRouter.get("/", (req, res, next) => {
  Project.getProjects()
  .then(project => {
    res.status(200).json(project)
  })
  .catch(next)
});

projectRouter.post("/", (req, res, next) => {
  const project = req.body
  Project.add(project)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(next)
})

module.exports = projectRouter