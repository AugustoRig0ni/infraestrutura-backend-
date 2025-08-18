const express = require ('express');
const { createEquipament, getAllequipaments } = require('../controllers/equipmentcontroller');
const authMiddleware = require ('../middlewares/authMiddleware');
const router = express.Router(); 

router.post ('/', authMiddleware, createEquipament);
router.get ('/', authMiddleware, getAllequipaments);

module.exports = router;

