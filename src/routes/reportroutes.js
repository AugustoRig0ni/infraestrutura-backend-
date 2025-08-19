const express = require ('express');
const { getEquipmentsStatusCount } = require ('../controllers/reportController');
const authMiddleware = require ('../middleware/authMiddleware.js');
const router = express.Router();

router.get('/', authMiddleware, getEquipmentsStatusCount);

module.exports = router;