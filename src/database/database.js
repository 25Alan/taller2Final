import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "nodejs",
  "root",
  "Continueds1Alan25postal;eGu3do",
  {
    host: "localhost",
    dialect: "mysql",
  }
);