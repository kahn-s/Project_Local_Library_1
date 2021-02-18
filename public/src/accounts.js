function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    let accountById = "I'm sorry, I can't find that account.";
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
}

function getAuthor(authors, id) {
  //Gets author info for each book.
  const arrayToObject = (array) =>
    array.reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {});
  const authorsObject = arrayToObject(authors);
  authorInfo = authorsObject[id];

  //authorInfo = authors.filter((element) => element.id === id);
  console.log(authorInfo);
  return authorInfo;
}

function getBooksPossessedByAccount(account, books, authors) {
  /*1. filter for books that haven't been returned
2. filter those books for borrowed by account*/

  let authorInfo;
  let result = [];
  booksPossessedByAccount = books;
  booksPossessedByAccount = booksPossessedByAccount.filter(
    (book) => book.borrows[0].returned != "true"
  );
  booksPossessedByAccount = booksPossessedByAccount.filter(
    (book) => book.borrows[0].id === account.id
  );
  booksPossessedByAccount = booksPossessedByAccount.map((book) => {
    id = book.authorId;

    authorInfo = getAuthor(authors, id);
    book.author = authorInfo;
    book = { ...book };
    console.log(book);
    result.push(book);
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
