import { Router } from "express";
import {
    getCategory,
    getCategorys,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/category.controller.js";

const category = Router();

category.get("/tasks/:id", getCategory);
category.get("/category", getCategorys);
category.post("/category", createCategory);
category.put("/category/:id", updateCategory);
category.delete("/category/:id", deleteCategory);

export default category;