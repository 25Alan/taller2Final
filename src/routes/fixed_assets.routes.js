import { Router } from "express";
import {
  getAsset,
  getAssets,
  createAsset,
  deleteAsset,
  updateAsset,
  getFixedAssetsAll,
} from "../controllers/fixed_assets.controller.js";

const fixed_assets = Router();

fixed_assets.get("/fixed_assets/:id", getAsset);
fixed_assets.get("/fixed_assets", getAssets);
// fixed_assets.get('/fixed_assets_all/', getFixedAssetsAll)
fixed_assets.post("/fixed_assets", createAsset);
fixed_assets.delete("/fixed_assets/:id", deleteAsset);
fixed_assets.put("/fixed_assets/:id", updateAsset);

export default fixed_assets;