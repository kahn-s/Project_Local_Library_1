function findAuthorById(authors, id) {
  authorById = authors.find((author) => author.id === id);
  return authorById;
} //this works

function findBookById(books, id) {
  BookById = books.find((book) => book.id === id);
  return BookById;
  /*for (let i = 0; i < books.length; i++) {
    if (id === books[i].id) {
      BookById = books[i];
      return BookById;
    }
  }*/
} //this works

function partitionBooksByBorrowedStatus(books) {
  //sort books [[returned][not returned]]
  const newBooks = [...books];
  const borrowedBooks = newBooks.filter((book) => !book.borrows[0].returned);
  const returnedBooks = newBooks.filter((book) => book.borrows[0].returned);
  const booksByBorrowedStatus = [borrowedBooks, returnedBooks];
  return booksByBorrowedStatus;
} //this works

function getBorrowersForBook(book, accounts) {
  //Creates an array of all accounts that borrowed the book, incl if returned.
  let borrowers = [];
  const newAccounts = [...accounts];
  newAccounts.map((account) => (account.returned = false));
  for (let i = 0; i < book.borrows.length; i++) {
    for (let j = 0; j < newAccounts.length; j++) {
      if (book.borrows[i].id === newAccounts[j].id) {
        newAccounts[j].returned = book.borrows[i].returned;
        borrowers.push(newAccounts[j]);
      }
    }
  }
  BorrowersForBook = borrowers.slice(0, 10);
  return BorrowersForBook;
} //this works

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
