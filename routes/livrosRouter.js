import { GetLivro, getLivros, insereLivro  } from '../controller/livroController.js';
import {Router} from 'express'
import { insereLivro } from '../service/livroService.js';


const router = Router(); 

router.get('/', getLivros)

router.get('/:id', GetLivro)

router.post('/', insereLivro)
// POST - Criar um livro
router.post('/', (req, res) =>{
    res.send('Estou na rota post')
});
// PATCH - Atualizar um livro 
router.patch('/', (req, res) =>{
    res.send('Estou na rota patch')
});
// DELETE  - Apagar um livro
router.delete('/', (req, res) =>{
    res.send('Estou na rota delete')
});

export default router;
