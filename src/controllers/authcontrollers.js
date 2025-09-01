const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({where: {nome: 'João Teste'}});
    console.log(user);
    
    try {
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        res.json({ token: generateToken(user.id, user.tipo) });

    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ message: "Erro interno no servidor" });
    }
};

module.exports = { login };
