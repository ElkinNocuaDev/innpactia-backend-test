const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Phone = sequelize.define("Phone", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  client_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  brand: { 
    type: DataTypes.STRING(50), 
    allowNull: false 
  },
  model: { 
    type: DataTypes.STRING(50), 
    allowNull: false 
  },
  imei: { 
    type: DataTypes.STRING(50), 
    allowNull: true 
  },
}, {
  tableName: "phones",
  timestamps: false
});

module.exports = Phone;
