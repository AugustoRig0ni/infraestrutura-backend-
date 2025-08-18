const express = require ('express');
const { createMaintenance, getMaintenanceByEquipment } = require ('../controllers/maintenancecontroller');
const authMiddleware = require ('../middleware/authMiddleware');
const router = express.Router();

router.post ('/', authMiddleware, createMaintenance);
router.get ('/', authMiddleware, getMaintenanceByEquipment);

module.exports = router;