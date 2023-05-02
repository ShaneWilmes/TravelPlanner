const { Model, DataTypes } = require('sequelize');  // Import sequelize
const sequelize = require('../config/connection');  // Connect sequelize to server

// Location model
class Location extends Model {}

// Fields and columns for Location model
Location.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        location_name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'location'
      }
);

module.exports = Location;

