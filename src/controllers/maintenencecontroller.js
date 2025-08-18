const maintenance = require('../models/maintenance');
const equipment = require('../models/equipments');
const Maintenance = require('../models/maintenance');

const createMaintenance = async (req, res) => {
    try {
        const maintenance = await Maintenance.create (req.body);
        await Equipment.update ({ status: 'manutenção'}, { where: {id: req.body.equipamentId} });
        res.status(201).json(maintenance);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const getMaintenanceByEquipment = async (req, res) => {
    const {equipmentId} = req.params;
    const maintenance = await Maintenance.findAll ({ where: { equipmentId} });
    res.json (maintenance);
}   

module.exports = { createMaintenance, getMaintenanceByEquipment};