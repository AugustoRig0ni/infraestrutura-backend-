const express = require('express');
const { login } = require('../controllers/authcontrollers.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Rota /api/auth funcionando 🚀');
});

console.log('O servidor está funcionando!')

router.post('/login', login);

module.exports = router;
