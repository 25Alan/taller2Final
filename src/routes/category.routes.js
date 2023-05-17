import { Router } from "express";
import {
    getCategorys,
    createCategory,
    // createTask,
    // deleteTask,
    // updateTask,
} from "../controllers/category.controller.js";

const category = Router();

category.get("/category", getCategorys);
category.post("/category", createCategory);
// tasksRoutes.put("/tasks/:id", updateTask);
// tasksRoutes.delete("/tasks/:id", deleteTask);
// tasksRoutes.get("/tasks/:id", getTask);

export default category;