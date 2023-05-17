import express from "express";
import fixed_assets from './routes/fixed_assets.routes.js';
import states from './routes/states.routes.js';
import category from "./routes/category.routes.js";
import locations from "./routes/locations.routes.js";
import method_depreciation from "./routes/method_depreciation.routes.js";


const app = express();

// PARA RECIBIR DATOS PRIMERO ANTES DE LAS RUTAS
// TENGO QUE AÑADIR MIDDLEWARES
app.use(express.json());

app.use(fixed_assets);
app.use(states);
app.use(category);
app.use(locations);
app.use(method_depreciation);

export default app;