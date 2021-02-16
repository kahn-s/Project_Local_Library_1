function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      accountById = accounts[i];
      return accountById;
    }
  }
} //this works

function sortAccountsByLastName(accounts) {
  let accountsByLastName = accounts;
  const compare = (a, b) => {
    if (a.name.last.toUpperCase() < b.name.last.toUpperCase()) {
      return -1;
    }
    if (a.name.last.toUpperCase() > b.name.last.toUpperCase()) {
      return 1;
    } else {
      return 0;
    }
  };
  accountsByLastName.sort(compare);
  return accountsByLastName;
} //this works

function numberOfBorrows(account, books) {
  //for given account, get id, search books for if borrowed, count total books borrowed.
  let numberOfBorrows = 0;
  for (let i = 0; i < books.length; i++) {
    const borrows = books[i].borrows;
    const person = account.id;
    for (let j = 0; j < borrows.length; j++) {
      if (person === borrows[j].id) {
        numberOfBorrows += 1;
      }
    }
  }
  return numberOfBorrows;
} //this works

function getBooksPossessedByAccount(account, books, authors) {
  //const array for result
  const booksPossessedByAccount = [];
  //find account id in books, check if returned, if not, push to array.
  // i iterates books object, j iterates borrows object, k iterates authors

  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      const borrows = books[i].borrows;
      //was book loaned and not returned?
      if (account.id === borrows[j].id && !borrows[j].returned) {
        //find books' author
        for (let k = 0; k < authors.length; k++) {
          if (books[i].authorId === authors[k].id) {
            //deep copy book object and and add author
            const newBook = { ...books[i] };
            newBook.author = { ...authors[k] };
            // add newBook to booksPossessed array
            booksPossessedByAccount.push(newBook);
          }
        }
      }
    }
  }
  return booksPossessedByAccount;
} // this works.  Later try to condense code

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
