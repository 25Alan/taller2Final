import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const locations = sequelize.define(
    "locations",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(45),
        },
        city: {
            type: DataTypes.STRING(20),
        },
        country: {
            type: DataTypes.STRING(20),
        },
    },
    {
        timestamps: false,
    }
);