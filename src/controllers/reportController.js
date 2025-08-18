const sequelize = require('../config/database')
const equipment = require ('../models/equipment')

const getEquipmentsStatusCount = async (req, res) => {
    const statusCount = await equipment.findAll ({
        attributes: ['status', [sequelize.fn( 'COUNT', sequelize.col('status')) , 'count']],
        group: ['status']
    });
    res.json(statusCount);
};

module.exports = { getEquipmentsStatusCount };
