// build your `Task` model here
const db = require("../../data/dbConfig");

const getTasks = async () => {
  const taskProjectJoin = await db("tasks as t")
  .leftJoin("projects as p", "p.project_id", "t.project_id")
  .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
  )

  const tasks = taskProjectJoin.map((task) => {
    return {
      task_description: task.task_description,
      task_notes: task.task_notes,
      // task_completed: task.task_completed != 1 ? false : true,
      task_completed: Boolean(task.task_completed),
      project_name: task.project_name,
      project_description: task.project_description

    }
  })
  return tasks
  
};

const add = async (task) => {
  await db("tasks").insert(task)
  
  const newTask = {
    task_description: task.task_description,
    task_notes: task.task_notes,
    task_completed: Boolean(task.task_completed),
  }
  return newTask
};

module.exports = {
  getTasks,
  add
}