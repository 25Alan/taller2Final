import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { task } from "./task.js";

export const project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

project.hasMany(task, {
  foreignKey: "projectId",
  sourceKey: "id",
});

task.belongsTo(project, {
  foreignKey: "projectId",
  targetId: "id",
});