// build your `Project` model here
const db = require("../../data/dbConfig");

const getProjects = async () => {
  const project = await db("projects");

  const updatedProject = project.map((project) => {
    return {
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: project.project_completed != 1 ? false : true
    }
  }) 

  return updatedProject;
};

const add = async (project) => {
  await db("projects").insert(project)

  const newProject = {
    project_id: project.project_id,
    project_name: project.project_name,
    project_description: project.project_description,
    project_completed: project.project_completed != 1 ? false : true
  }

  return newProject
};

module.exports = {
  getProjects,
  add
}