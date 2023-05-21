import express from "express";
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import fixed_assets from './routes/fixed_assets.routes.js';
import states from './routes/states.routes.js';
import category from "./routes/category.routes.js";
import locations from "./routes/locations.routes.js";
import method_depreciation from "./routes/method_depreciation.routes.js";
import responsible from "./routes/responsible.routes.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const publicPath = path.resolve(dirname(__filename), '../public');
app.use(express.static(publicPath));

app.use(fixed_assets);
app.use(states);
app.use(category);
app.use(locations);
app.use(method_depreciation);
app.use(responsible);

export default app;