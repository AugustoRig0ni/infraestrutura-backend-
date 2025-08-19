const Equipment = require('../models/equipment.js');

const createEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.create(req.body);
        res.status(201).json(equipment)
    } catch (err) {
        res.status(400).json({ message: err.message}); 
    }
}; 

const getAllEquipments = async (req, res) => {
    const { type, status, location } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (status) filter.status = status;
    if (location) filter.location = location;

const equipments = await Equipment.findAll({ where: filter });
res.json(equipments);
};

module.exports = { createEquipment, getAllEquipments};
