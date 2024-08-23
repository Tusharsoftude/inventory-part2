import { DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig.js';
import User from './user.model.js';

// Define the Item model
const Item = sequelize.define('Items', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true, // Description can be optional
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0, // Quantity should not be negative
    },
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0, // Price should be a positive number
    },
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

// Define associations


export default Item;
