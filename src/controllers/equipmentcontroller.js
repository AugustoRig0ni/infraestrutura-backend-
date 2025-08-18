const Equipment = require('../models/Equipment');

const createEquipment = async (req, res) => {
    try {
        const equipament = await Equipment.create(req.body);
        res.status(201).json(equipament)
    } catch (err) {
        res.status(400).json({ message: err.message}); 
    }
}; 

const getAllequipments = async (req, res) => {
    const { type, status, location } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (status) filter.status = status;
    if (location) filter.location = location;

const equipaments = await equipament.findAll({ where: filter });
res.json(equipaments);
};

module.exports = { createEquipment, getAllequipments};
