import { Router } from "express";
import {
    getResponsible,
    createResponsible,
    // createTask,
    // deleteTask,
    // updateTask,
} from "../controllers/responsible.controller.js";

const responsible = Router();

responsible.get("/responsible", getResponsible);
responsible.post("/responsible", createResponsible);
// tasksRoutes.put("/tasks/:id", updateTask);
// tasksRoutes.delete("/tasks/:id", deleteTask);
// tasksRoutes.get("/tasks/:id", getTask);

export default responsible;