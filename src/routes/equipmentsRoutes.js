const express = require ('express');
const { createEquipment, getAllEquipments } = require('../controllers/equipmentcontroller.js');
const authMiddleware = require ('../middleware/authMiddleware.js');
const router = express.Router(); 

router.post ('/', authMiddleware, createEquipment);
router.get ('/', authMiddleware, getAllEquipments);

module.exports = router;

