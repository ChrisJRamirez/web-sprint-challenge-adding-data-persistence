// build your `Task` model here
const db = require("../../data/dbConfig");

const getTasks = () => {
  const tasks = db("tasks")
  return tasks
};

const add = (task) => {
  return db("tasks")
  .insert(task)
  .then(([task_id]) => {
    return db("tasks").where("task_id", task_id).first()
  })
};

module.exports = {
  getTasks,
  add
}