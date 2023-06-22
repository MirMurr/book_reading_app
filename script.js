const title = document.getElementById('title');
const author = document.getElementById('author');
const shortStory = document.getElementById('short-story');
const thoughts = document.getElementById('thoughts');
const purchaseDate = document.getElementById('purchase-date');
const addButton = document.getElementById('add-button');
const deleteButton = document.querySelector('.delete-button');
const completedButton = document.querySelector('.completed-button');
const bookList = document.querySelector('.book-list');

class Book {
  constructor(title, author, shortStory, thoughts, purchaseDate) {
    this.title = title;
    this.author = author;
    this.shortStory = shortStory;
    this.thoughts = thoughts;
    this.purchaseDate = purchaseDate;
  }

  displayNewBook() {
    let listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.innerHTML = `
      <h3>${this.title}</h3>
      <p>${this.author}</p>
      <p>${this.shortStory}</p>
      <p>${this.thoughts}</p>
      <p>Purchase Date: ${this.purchaseDate}</p>
      <button class="completed-button">Mark completed</button>
      <button class="delete-button">Delete</button>
    `;
    bookList.appendChild(listItem);
  }

  deleteItems() {
    let listItems = document.querySelectorAll('.list-item');
    listItems.forEach((listItem) => {
      listItem.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON' && e.target.classList.contains('delete-button')) {
          e.target.parentElement.remove();
        }
      })
    })
  }
}

const addBook = () => {
  const book = new Book(
    title.value,
    author.value,
    shortStory.value,
    thoughts.value,
    purchaseDate.value,
  );

  book.displayNewBook();
  book.deleteItems();

  // Reset values after we added a new book
  title.value = '';
  author.value = '';
  shortStory.value = '';
  thoughts.value = '';
  purchaseDate.value = '';
}

//add the eventlistener to the booklist and combine the 2 methods: changing the text in the button and adding the completed class
//this is separate cause we needed to add 2 eventlisteners to the one button and that causes unexpected errors
bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('completed-button')) {
    e.target.parentElement.classList.toggle('completed');
  } else {
    return
  }
  if(e.target.parentElement.classList.contains('completed')) {
    e.target.innerHTML = 'Mark incomplete'
  } else {
    e.target.innerHTML = 'Mark completed'
  }
});

addButton.addEventListener('click', addBook);
deleteButton.addEventListener('click', deleteItems);





