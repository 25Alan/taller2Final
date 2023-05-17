import { Router } from "express";
import {
  getAssets,
  createAsset,
  // deleteProject,
  // getProject,
  // getProjects,
  // getProjectTasks,
  // updateProject,
} from "../controllers/fixed_assets.controller.js";

const fixed_assets = Router();

fixed_assets.get("/fixed_assets", getAssets);
fixed_assets.post("/fixed_assets", createAsset);
// fixed_assets.put("/fixed_assets/:id", updateProject);
// fixed_assets.delete("/fixed_assets/:id", deleteProject);
// fixed_assets.get("/fixed_assets/:id", getProject);

// fixed_assets.get('/fixed_assets/:id/tasks', getProjectTasks)

export default fixed_assets;