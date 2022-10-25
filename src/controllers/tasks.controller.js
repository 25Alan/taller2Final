import { task } from "../models/task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskFound = await task.findOne({
      where: {
        id: id,
      },
      attributes: ["name"],
    });
    res.json(taskFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;

  try {
    const newTask = await task.create({
      name,
      done,
      projectId,
    });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const taskOne = await task.findOne({
      where: { id },
    });
    taskOne.set(req.body);
    await taskOne.save();
    return res.json(taskOne);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await task.destroy({
      where: { id },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};