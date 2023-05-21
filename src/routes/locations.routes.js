import { Router } from "express";
import {
    getLocation,
    getLocations,
    createLocation,
    updateLocation,
    deleteLocation,
} from "../controllers/locations.controller.js";

const location = Router();

location.get("/locations/:id", getLocation);
location.get("/locations", getLocations);
location.post("/locations", createLocation);
location.put("/locations/:id", updateLocation);
location.delete("/locations/:id", deleteLocation);

export default location;