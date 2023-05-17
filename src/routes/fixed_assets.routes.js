import { Router } from "express";
import {
  getAssets,
  createAsset,
  deleteAsset,
  getAsset,
  updateAsset,
} from "../controllers/fixed_assets.controller.js";

const fixed_assets = Router();

fixed_assets.get("/fixed_assets", getAssets);
fixed_assets.post("/fixed_assets", createAsset);
fixed_assets.get("/fixed_assets/:id", getAsset);
fixed_assets.delete("/fixed_assets/:id", deleteAsset);
fixed_assets.put("/fixed_assets/:id", updateAsset);
// fixed_assets.get('/fixed_assets/:id/tasks', getProjectTasks)

export default fixed_assets;