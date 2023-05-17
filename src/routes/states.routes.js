import { Router } from "express";
import {
  createState,
  getStates,
  // createTask,
  // deleteTask,
  // updateTask,
} from "../controllers/states.controller.js";

const states = Router();

states.get("/states", getStates);
states.post("/states", createState);
// tasksRoutes.put("/tasks/:id", updateTask);
// tasksRoutes.delete("/tasks/:id", deleteTask);
// tasksRoutes.get("/tasks/:id", getTask);

export default states;