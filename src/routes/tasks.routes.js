import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller.js";

const tasksRoutes = Router();

tasksRoutes.get("/tasks", getTasks);
tasksRoutes.post("/tasks", createTask);
tasksRoutes.put("/tasks/:id", updateTask);
tasksRoutes.delete("/tasks/:id", deleteTask);
tasksRoutes.get("/tasks/:id", getTask);

export default tasksRoutes;