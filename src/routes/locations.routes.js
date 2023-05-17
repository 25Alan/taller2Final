import { Router } from "express";
import {
    getLocation,
    createLocation,
    // createTask,
    // deleteTask,
    // updateTask,
} from "../controllers/locations.controller.js";

const location = Router();

location.get("/locations", getLocation);
location.post("/locations", createLocation);
// tasksRoutes.put("/tasks/:id", updateTask);
// tasksRoutes.delete("/tasks/:id", deleteTask);
// tasksRoutes.get("/tasks/:id", getTask);

export default location;