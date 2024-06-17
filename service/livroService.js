import fs from 'fs'

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"))    
}

function getLivroPorId(id){
  const livros = JSON.parse(fs.readFileSync("livros.json"))
  const livrosFiltrado = livros.filter(livros => livros.id === id)[0]
  return livrosFiltrado
}

function insereLivro(livroNovo){
  const livros = JSON.parse(fs.readFileSync("livros.json"))
  const novaListaDeLivros = [...livros, livroNovo]
  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros, null,))
}
export {getTodosLivros,getLivroPorId, insereLivro}