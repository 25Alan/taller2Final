import { Router } from "express";
import {
    getLocations,
    createLocation,
    updateLocation,
    deleteLocation,
    getLocation,
} from "../controllers/locations.controller.js";

const location = Router();

location.get("/locations", getLocations);
location.post("/locations", createLocation);
tasksRoutes.put("/locations/:id", updateLocation);
tasksRoutes.delete("/locations/:id", deleteLocation);
tasksRoutes.get("/tasks/:id", getLocation);

export default location;