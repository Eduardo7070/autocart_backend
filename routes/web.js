import express from 'express';
import {getProdutos, getProdutoById, createProduto} from '../controllers/produtosController.js';

const router = express.Router();

router.get('/produtos', getProdutos);
router.get('/produtos/:id', getProdutoById);
router.post('/produtos', createProduto);

export default router;