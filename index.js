function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch ('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(thrones =>(
    renderBooks(thrones))
  )
}
function renderBooks(books) {
  // Access the bookList element in the DOM
  const bookListElement = document.getElementById('bookList');

  // Clear any existing content inside the element
  bookListElement.innerHTML = '';

  // Iterate through each book in the JSON object
  books.forEach(book => {
    // Create a new list item element for each book
    const listItem = document.createElement('li');
    listItem.textContent = book.title; // Assuming the book object has a "title" property

    // Append the list item to the bookList element
    bookListElement.appendChild(listItem);
  });
}
const booksData = [
  { "title": "Book 1" },
  { "title": "Book 2" },
  { "title": "Book 3" }
];

renderBooks(booksData);






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
