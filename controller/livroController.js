
import { getTodosLivros, getLivroPorId, insereLivro } from '../service/livroService.js'

export const getLivros = (req, res) => {
    try {
        const livros = getTodosLivros()
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
 };

 export const GetLivro = (req, res) => {
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
 };

 export const postLivro = async (req,res) =>{
try {
    const livroNovo = req.body
    insereLivro(livroNovo)
    res.status(201).json(livroNovo)
}catch(error){
    res.status(500);
    res.send(error.message);
}

 }