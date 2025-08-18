const express = ('express');
const { getEquipmentsStatusCount } = require ('../controllers/reportController');
const authMiddleware = require ('../middlewares/authMiddlewares');
const router = express.router();

router.get('/', authMiddleware, getEquipmentsStatusCount);

module.exports = router;