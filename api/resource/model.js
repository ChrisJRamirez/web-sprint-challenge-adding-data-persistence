// build your `Resource` model here
const db = require("../../data/dbConfig");

const getResources = () => {
  const resources = db("resources")

  return resources;
};

const add = (resource) => {
  return db("resources")
  .insert(resource)
  .then(([resource_id]) => {
    return db("resources").where("resource_id", resource_id).first()
  })

} 

module.exports = {
  getResources,
  add
}