import { Router } from "express";
import {
    getMethod_depreciation,
    createMethod_depreciation,
    // createTask,
    // deleteTask,
    // updateTask,
} from "../controllers/method_depreciation.js";

const method_depreciation = Router();

method_depreciation.get("/method_depreciation", getMethod_depreciation);
method_depreciation.post("/method_depreciation", createMethod_depreciation);
// tasksRoutes.put("/tasks/:id", updateTask);
// tasksRoutes.delete("/tasks/:id", deleteTask);
// tasksRoutes.get("/tasks/:id", getTask);

export default method_depreciation;