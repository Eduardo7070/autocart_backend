import express from 'express';
import {getProdutos, getProdutoById, createProduto} from '../controllers/produtosController.js';
import {loginUser} from '../controllers/loginController.js';

const router = express.Router();
    
router.get('/produtos', getProdutos);
router.get('/produtos/:id', getProdutoById);
router.post('/produtos', createProduto);

router.post('/login', loginUser);

export default router;