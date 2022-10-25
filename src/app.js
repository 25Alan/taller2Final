import express from "express";
import projectsRoutes from './routes/projects.routes.js';
import tasksRoutes from './routes/tasks.routes.js';


const app = express();

// PARA RECIBIR DATOS PRIMERO ANTES DE LAS RUTAS
// TENGO QUE AÑADIR MIDDLEWARES
app.use(express.json());

app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;