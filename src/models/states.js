import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { fixed_assets } from './fixed_assets.js'

export const states = sequelize.define(
  "states",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    state: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
