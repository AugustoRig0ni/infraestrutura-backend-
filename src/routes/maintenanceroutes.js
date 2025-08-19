const express = require ('express');
const { createMaintenance, getMaintenanceByEquipment } = require ('../controllers/maintenancecontroller.js');
const authMiddleware = require ('../middleware/authMiddleware.js');
const router = express.Router();

router.post ('/', authMiddleware, createMaintenance);
router.get ('/', authMiddleware, getMaintenanceByEquipment);

module.exports = router;