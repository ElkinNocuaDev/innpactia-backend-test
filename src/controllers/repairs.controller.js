const Repair = require("../models/Repair");

exports.getRepairsByPhone = async (req, res) => {
  try {
    const { phoneId } = req.params;
    const repairs = await Repair.findAll({ where: { phone_id: phoneId } });
    res.json(repairs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll({ order: [["repair_date", "DESC"]] });
    res.json(repairs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRepair = async (req, res) => {
  try {
    const { phone_id, description, cost, status } = req.body;
    const repair = await Repair.create({ phone_id, description, cost, status });
    res.status(201).json(repair);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
