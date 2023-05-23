import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { states } from "./states.js";
import { category } from "./category.js";
import { responsible } from "./responsible.js";
import { method_depreciation } from "./method_depreciation.js";
import { locations } from "./locations.js";

export const fixed_assets = sequelize.define(
  "fixed_assets",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    acquisition_value: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    date_acquisition: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    useful_life: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    residual_value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    depreciation_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    observations: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    id_status: {
      type: DataTypes.INTEGER,
    },
    id_category: {
      type: DataTypes.INTEGER,
    },
    id_method_depreciation: {
      type: DataTypes.INTEGER,
    },
    id_location: {
      type: DataTypes.INTEGER,
    },
    id_responsible: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);


// states.hasMany(fixed_assets,
//   {
//     foreignKey: 'id_status',
//     sourceKey: 'id'
//   });

// fixed_assets.belongsTo(states,
//   {
//     foreignKey: 'id_status',
//     targetId: 'id'
//   });

// fixed_assets.belongsTo(states, { foreignKey: 'id' });

// fixed_assets.belongsTo(category, { foreignKey: 'id_category', onDelete: 'CASCADE' });
// category.hasMany(fixed_assets, { foreignKey: 'id_category', onDelete: 'CASCADE' });

// fixed_assets.belongsTo(locations, { foreignKey: 'id_location', onDelete: 'CASCADE' });
// locations.hasMany(fixed_assets, { foreignKey: 'id_location', onDelete: 'CASCADE' });

// fixed_assets.belongsTo(responsible, { foreignKey: 'id_responsible', onDelete: 'CASCADE' });
// responsible.hasMany(fixed_assets, { foreignKey: 'id_responsible', onDelete: 'CASCADE' });

// fixed_assets.belongsTo(method_depreciation, { foreignKey: 'id_method_depreciation', onDelete: 'CASCADE' });
// method_depreciation.hasMany(fixed_assets, { foreignKey: 'id_method_depreciation', onDelete: 'CASCADE' });