import { Router } from "express";
import {
    getResponsible,
    getResponsibles,
    createResponsible,
    updateResponsible,
    deleteReponsible,
} from "../controllers/responsible.controller.js";

const responsible = Router();

responsible.get("/responsible/:id", getResponsible);
responsible.get("/responsible", getResponsibles);
responsible.post("/responsible", createResponsible);
responsible.put("/responsible/:id", updateResponsible);
responsible.delete("/responsible/:id", deleteReponsible);

export default responsible;