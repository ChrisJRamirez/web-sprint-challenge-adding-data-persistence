// build your `/api/resources` router here
const express = require("express");
const resourceRouter = express.Router();
const Resource = require("./model");

resourceRouter.get("/", (req, res, next) => {
  Resource.getResources()
  .then(resource => {
    res.status(200).json(resource)
  })
  .catch(next)
});

resourceRouter.post("/", (req, res, next) => {
  const resource = req.body

  Resource.add(resource)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(next)
})


module.exports = resourceRouter