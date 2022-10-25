import { project } from "../models/project.js";
import { task } from "../models/task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const projectFound = await project.findOne({
      where: {
        id: id,
      },
    });

    if (!projectFound)
      return res.status(404).json({ message: "Project not found" });

    res.json(projectFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProject = await project.create({
      name,
      priority,
      description,
    });
    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    const projectId = await project.findByPk(id);
    projectId.name = name;
    projectId.priority = priority;
    projectId.description = description;
    await projectId.save();

    res.json(projectId);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await project.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.sendStatus(204);
};

export const getProjectTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await task.findAll({
      where: { projectId: id },
    });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};