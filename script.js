
const bookForm = document.getElementById("form-container");
const libraryTable = document.getElementById("library-table");
const submitButton = document.getElementById("submit-button");
const closeButton = document.getElementById("close-button");
let myLibrary = [];


let title = document.getElementById("title").value;
let titleInput = document.getElementById("title");
titleInput.addEventListener("blur", titleValidation);
let titleError = document.getElementById("title-error");
let titleValid = false;

let author = document.getElementById("author").value;
let authorInput = document.getElementById("author");
authorInput.addEventListener("blur", authorValidation);
let authorError = document.getElementById("author-error");
let authorValid = false;

let pages = document.getElementById("pages").value;
let pagesInput = document.getElementById("pages");
pagesInput.addEventListener("blur", pagesValidation);
let pagesError = document.getElementById("pages-error");
let pagesValid = false;

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm();
})

function titleValidation() {
    titleError.innerHTML = "";

    if (title == "") {
        titleError.innerHTML = "Title is required";
        titleValid = false;
    } else {
        titleValid = true;
    }
}

function authorValidation() {
    authorError.innerHTML = "";

    if (author == "") {
        authorError.innerHTML = "Author is required";
        authorValid = false;
    } else {
        authorValid = true;
    }
}

function pagesValidation() {
    pagesError.innerHTML = "";

    if (pageCount == "") {
        pagesError.innerHTML = "Page count is required";
        pagesValid = false;
    } else {
        pagesValid = true;
    }
}

function validateForm() {
    titleValidation();
    authorValidation();
    pagesValidation();

    if (titleValid && authorValid && pagesValid) {
        submit();

        titleValid = false;
        authorValid = false;
        pagesValid = false;
    }
}

closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeForm();
})

function submit() {
    let read = document.getElementById("read").value;
    let rating = document.getElementById("rating").value;

    let newBook = new Book(title, author, pages, read, rating);
    addBookToLibrary(newBook);
    bookForm.reset();
    closeForm();
}

function openForm() {
    document.getElementById("book-form").style.display = "block";
}

function closeForm() {
    document.getElementById("book-form").style.display = "none";

    titleError.innerHTML = "";
    authorError.innerHTML = "";
    pagesError.innerHTML = "";

    bookForm.reset()
}

function Book(title, author, pages, read, rating) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.rating = rating
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    let row = libraryTable.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = book.title;
    cell2.innerHTML = book.author;
    cell3.innerHTML = book.pages;
    if (book.read == "Yes") {
        cell4.innerHTML = `<button class='statusButton statusRead' onclick='toggleReadStatus(${myLibrary.length})'>${book.read}</button>`;   
    } else {
        cell4.innerHTML = `<button class='statusButton statusNotRead' onclick='toggleReadStatus(${myLibrary.length})'>${book.read}</button>`
    };
    cell5.innerHTML = book.rating;
    cell6.innerHTML = `<button class='delete' onclick='deleteRow(${myLibrary.length})'><img src='./trash.svg'></button>`;

    row.dataset.attributeIndex = myLibrary.length;
}

function deleteRow(index) {
    let rows = libraryTable.rows;
    for (let i = 1; i < rows.length; i++) {
        if (rows[i].dataset.attributeIndex == index) {
            rows[i].remove();
        }
    }
}

function toggleReadStatus(index) {
    let rows = libraryTable.rows;

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].dataset.attributeIndex == index) {
            let targetRow = libraryTable.rows[i];
            let statusCell = targetRow.cells[3]; 
            if (statusCell.innerHTML.includes('Yes')) {
                statusCell.innerHTML = `<button class='statusButton statusNotRead' onclick='toggleReadStatus(${index})'>No</button>`;
            } else {
                statusCell.innerHTML = `<button class='statusButton statusRead' onclick='toggleReadStatus(${index})'>Yes</button>`;
            }
        }
    }
    

}

