import { Router } from "express";
import {
  getAsset,
  getAssets,
  createAsset,
  deleteAsset,
  updateAsset,
  result,
} from "../controllers/fixed_assets.controller.js";

const fixed_assets = Router();

fixed_assets.get("/fixed_assets/:code", getAsset);
fixed_assets.get("/fixed_assets", getAssets);
fixed_assets.get('/fixed_assets_all/', result)
fixed_assets.post("/fixed_assets", createAsset);
fixed_assets.delete("/fixed_assets/:code", deleteAsset);
fixed_assets.put("/fixed_assets/:id", updateAsset);

export default fixed_assets;