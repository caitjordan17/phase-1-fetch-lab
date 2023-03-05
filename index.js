const apiUrl = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
  return fetch(apiUrl)
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}
fetchBooks()


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
