import { Router } from "express";
import {
  getState,
  getStates,
  createState,
  deleteState,
  updateState,
} from "../controllers/states.controller.js";

const states = Router();

states.get("/states/:id", getState);
states.get("/states", getStates);
states.post("/states", createState);
states.put("/states/:id", updateState);
states.delete("/states/:id", deleteState);

export default states;