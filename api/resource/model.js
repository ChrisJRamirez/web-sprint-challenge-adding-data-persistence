// build your `Resource` model here
const db = require("../../data/dbConfig");

const getResources = () => {
  const resources = db("resources")

  return resources;
};

const add = (resource) => {
  
} 

module.exports = {
  getResources
}