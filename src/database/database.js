import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "project_tallerFinal",
  "postgres",
  "Continueds1",
  {
    host: "localhost",
    dialect: "postgres",
  }
);