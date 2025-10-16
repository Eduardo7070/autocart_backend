import { db } from '../config/db.js';


export const getProdutos = (req, res) => {
    const q = 'SELECT * FROM produtos';

    db.query(q, (err, data) => {
        if (data.length === 0) {
            return res.status(404).json("Sem produtos cadastrados");
        }
        if (err) return res.json(err);
        return res.json(data);
    });
}

export const getProdutoById = (req, res) => {
    const q = 'SELECT * FROM produtos WHERE id = ?';


    db.query(q, [req.params.id], (err, data) => {
        if (data.length === 0) {
            return res.status(404).json("O produto não foi encontrado");
        }
        if (err) return res.json(err);
        return res.json(data);
    });
}

export const createProduto = (req, res) => {
    const q = 'INSERT INTO produtos (`nome`, `descricao`, `preco`, `quantidade_estoque`, `categoria_id`, `fornecedor_id`, `data_validade`, `codigo_barras`, `unidade_medida`) VALUES (?)';
    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.preco,
        req.body.quantidade_estoque,
        /* temporario */0,
        /* temporario */0,
        req.body.data_validade,
        req.body.codigo_barras,
        req.body.unidade_medida
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Produto cadastrado com sucesso!");
    });
}
