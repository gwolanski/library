
const bookForm = document.getElementById("form-container");
const libraryTable = document.getElementById("library-table");
const submitButton = document.getElementById("submit-button");
const closeButton = document.getElementById("close-button");
let myLibrary = [];

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    submit();
})

closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeForm();
})

function submit() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let rating = document.getElementById("rating").value;

    let newBook = new Book(title, author, pages, read, rating);
    myLibrary.push(newBook);
    addBookToLibrary(newBook);
    bookForm.reset();
    closeForm();
}

function openForm() {
    document.getElementById("book-form").style.display = "block";
}

function closeForm() {
    document.getElementById("book-form").style.display = "none";
    console.log(myLibrary)
}

function Book(title, author, pages, read, rating) {
  //the constructor
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.rating = rating
}

function addBookToLibrary(book) {
    let row = libraryTable.insertRow(1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = book.title;
    cell2.innerHTML = book.author;
    cell3.innerHTML = book.pages;
    cell4.innerHTML = book.read;
    cell5.innerHTML = book.rating

    console.log(myLibrary);
    console.log(myLibrary.length)
//need to make this function build off of the original blank array
//each time a new book is submitted, the function should store (push) the new
    //object in the array, starting at myLibrary[0].

}


//on submit, have input fields get added to a table or card. might have to override usual
//submit button function if doing actual submit button since it expects going to backend
    //on submission, create a new Book object.
    //book objects should be added to the myLibrary array

//once entry created, have ability to toggle read property on or off

//have delete button to remove entries
