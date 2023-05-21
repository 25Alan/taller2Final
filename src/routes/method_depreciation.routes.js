import { Router } from "express";
import {
    getMdepreciation,
    getMdepreciations,
    createMdepreciation,
    updateMdepreciation,
    deleteMdepreciation,
} from "../controllers/method_depreciation.js";

const method_depreciation = Router();

method_depreciation.get("/method_depreciation", getMdepreciations);
method_depreciation.get("/method_depreciation/:id", getMdepreciation);
method_depreciation.post("/method_depreciation", createMdepreciation);
method_depreciation.put("/method_depreciation/:id", updateMdepreciation);
method_depreciation.delete("/method_depreciation/:id", deleteMdepreciation);

export default method_depreciation;