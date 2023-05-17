import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const responsible = sequelize.define(
    "responsible",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(25),
        },
        email: {
            type: DataTypes.STRING(30),
        },
    },
    {
        timestamps: false,
    }
);