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
location.put("/locations/:id", updateLocation);
location.delete("/locations/:id", deleteLocation);
location.get("/tasks/:id", getLocation);

export default location;