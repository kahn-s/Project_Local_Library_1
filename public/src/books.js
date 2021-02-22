function findAuthorById(authors, id) {
  authorById = authors.find((author) => author.id === id);
  return authorById;
}

function findBookById(books, id) {
  BookById = books.find((book) => book.id === id);
  return BookById;
}

function partitionBooksByBorrowedStatus(books) {
  //sort books [[returned][not returned]]
  const newBooks = [...books];
  const borrowedBooks = newBooks.filter((book) => !book.borrows[0].returned);
  const returnedBooks = newBooks.filter((book) => book.borrows[0].returned);
  const booksByBorrowedStatus = [borrowedBooks, returnedBooks];
  return booksByBorrowedStatus;
}

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
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
