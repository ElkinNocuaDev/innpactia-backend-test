const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Phone = require("./Phone"); // Importamos Phone para relación

const Repair = sequelize.define("Repair", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  phone_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  description: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  cost: { 
    type: DataTypes.DECIMAL(10,2), 
    allowNull: true 
  },
  status: { 
    type: DataTypes.ENUM("pending", "in_progress", "completed"), 
    defaultValue: "pending" 
  },
  repair_date: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  }
}, {
  tableName: "repairs",
  timestamps: false
});

// 📌 Relación: cada reparación pertenece a un teléfono
Repair.belongsTo(Phone, {
  foreignKey: "phone_id",
  as: "phone"
});

// 📌 Relación inversa: un teléfono tiene muchas reparaciones
Phone.hasMany(Repair, {
  foreignKey: "phone_id",
  as: "repairs"
});

module.exports = Repair;
