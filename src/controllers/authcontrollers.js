const User = require('../models/User');
const bcrypt = require ('bcryptjs');
const generateToken = require ('../utils/generateToken');

const login = async (req, res) => {
    const { emai, password } = req.body;
    const user = await User.findOne({ where : {email} }); 

        if (!user) return res.status(404).json({ message: 'Usário não encontrado'});

    const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Senha incorreta'});

res.json ({ token: generateToken (user.id, user.role) });

};

module.exports = { login };

