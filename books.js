// Defina a sua chave de API
const API_KEY = "AIzaSyD0Y5WuRZs3KkXIUy6aoWqldTM4ErRyETM";

// Defina o ID do livro que você quer obter as informações
const BOOK_ID = "44CcDwAAQBAJ";

// Faça uma requisição à API de livros do Google
fetch(`https://www.googleapis.com/books/v1/volumes/${BOOK_ID}?key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    // Extraia as informações que você precisa do objeto "data"
    const title = data.volumeInfo.title;
    const author = data.volumeInfo.authors[0];
    const imageUrl = data.volumeInfo.imageLinks.thumbnail;
    
    // Use essas informações para exibir o livro em seu perfil do GitHub
    // (por exemplo, com HTML e CSS)
  });
