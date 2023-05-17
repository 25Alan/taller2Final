import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const method_depreciation = sequelize.define(
    "method_depreciation",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(32),
        }
    },
    {
        timestamps: false,
    }
);