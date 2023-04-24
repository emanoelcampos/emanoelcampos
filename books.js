
// nome-do-seu-arquivo-js

const apiKey = 'AIzaSyD0Y5WuRZs3KkXIUy6aoWqldTM4ErRyETM';
const bookId = '44CcDwAAQBAJ';

fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const bookTitle = data.volumeInfo.title;
    document.getElementById('book').innerHTML = `<h2>Estou lendo:</h2><p>${bookTitle}</p>`;
  })
  .catch(error => {
    console.error('Ocorreu um erro ao buscar o livro:', error);
  });

