import { Router } from "express";
import {
    getCategorys,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
} from "../controllers/category.controller.js";

const category = Router();

category.get("/category", getCategorys);
category.post("/category", createCategory);
tasksRoutes.put("/category/:id", updateCategory);
tasksRoutes.delete("/category/:id", deleteCategory);
tasksRoutes.get("/tasks/:id", getCategory);

export default category;