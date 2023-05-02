const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Traveler model
class Traveler extends Model {}

// Create Traveler model
Traveler.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'traveler'
    }
  );
  
  module.exports = Traveler;
