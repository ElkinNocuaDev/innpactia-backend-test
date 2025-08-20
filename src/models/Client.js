const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Phone = require("./Phone"); // Importamos Phone para la relación

const Client = sequelize.define("Client", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  full_name: { 
    type: DataTypes.STRING(120), 
    allowNull: false 
  },
  email: { 
    type: DataTypes.STRING(120), 
    allowNull: false, 
    unique: true 
  },
  phone: { 
    type: DataTypes.STRING(20), 
    allowNull: true 
  },
}, {
  tableName: "clients",
  timestamps: false
});

// 📌 Relación: un cliente tiene muchos teléfonos
Client.hasMany(Phone, {
  foreignKey: "client_id",
  as: "phones"
});
Phone.belongsTo(Client, {
  foreignKey: "client_id",
  as: "client"
});

module.exports = Client;
