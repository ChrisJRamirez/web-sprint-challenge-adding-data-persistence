// build your server here and require it from index.js
const express = require("express");

const ResourceRouter = require("./resource/router");
const ProjectRouter = require("./project/router");

const server = express();

server.use(express.json());
server.use("/api/resources", ResourceRouter);
server.use("/api/projects", ProjectRouter)

// server.use("*", (req, res) => {
//   res.json({api: "Up and running"})
// });

module.exports = server;