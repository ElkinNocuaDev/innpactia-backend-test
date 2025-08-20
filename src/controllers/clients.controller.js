const Client = require("../models/Client");

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createClient = async (req, res) => {
  try {
    const { full_name, email, phone } = req.body;
    const client = await Client.create({ full_name, email, phone });
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
