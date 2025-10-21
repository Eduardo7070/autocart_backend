import { db } from '../config/db.js';
import bcrypt from "bcrypt";


export const loginUser = async (req, res) => {
    const { usuario, senha, tipo_acesso } = req.body;

    const q = 'SELECT * FROM usuarios WHERE usuario = ? AND tipo_acesso = ?';

    db.query(q, [usuario, tipo_acesso], async (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length === 0) {
            return res.status(401).json("Usuário não encontrado ou tipo incorreto");
        }

    
        const senhaValida = await bcrypt.compare(senha, data[0].senha);

        if (!senhaValida) {
            return res.status(401).json("Senha incorreta");
        }

        if (tipo_acesso === 'admin') {
            return res.status(200).json("Login de administrador bem-sucedido");
        } else if (tipo_acesso === 'gerente') {
            return res.status(200).json("Login de gerente bem-sucedido");
        } else if (tipo_acesso === 'caixa') {
            return res.status(200).json("Login de caixa bem-sucedido");
        }

        return res.status(200).json("Login bem-sucedido");
    });
};