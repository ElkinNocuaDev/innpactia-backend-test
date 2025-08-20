const Phone = require("../models/Phone");

exports.getPhonesByClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const phones = await Phone.findAll({ where: { client_id: clientId } });
    res.json(phones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPhone = async (req, res) => {
  try {
    const { client_id, brand, model, imei } = req.body;
    const phone = await Phone.create({ client_id, brand, model, imei });
    res.status(201).json(phone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
