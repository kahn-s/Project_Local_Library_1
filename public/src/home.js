function totalBooksCount(books) {
  let totalBooksCount = 0;
  books.forEach(function (book) {
    if ("title") {
      totalBooksCount += 1;
    }
  });
  return totalBooksCount;
}

function totalAccountsCount(accounts) {
  let totalAccountsCount = 0;
  accounts.forEach(function (account) {
    if ("id") {
      totalAccountsCount += 1;
    }
  });
  return totalAccountsCount;
}

function booksBorrowedCount(books) {
  const newBooks = [...books];
  let booksBorrowedCount = 0;
  newBooks.forEach(function (book) {
    if (!book.borrows[0].returned) {
      booksBorrowedCount += 1;
    }
  });
  return booksBorrowedCount;
}

function getMostCommonGenres(books) {
  let genresList = [];
  let mostCommonGenres = [];
  //let countedType;
  for (let book in books) {
    let genre = books[book].genre;
    genresList.push(genre);
  }
  while (genresList.length != 0) {
    function countTypes(array, type) {
      let holdingArray = [];
      holdingArray = array.filter((value) => value === type);
      let countedType = { name: type, count: holdingArray.length };
      mostCommonGenres.push(countedType);
    }

    console.log(mostCommonGenres);
    genresList = genresList.filter((value) => value != genresList[0]);

    countTypes(genresList, genresList[0]);
  }
  mostCommonGenres.sort((a, b) => b.count - a.count);
  return mostCommonGenres.slice(0, 5);
}

function getMostPopularBooks(books) {
  //filter borrows, sort borrows.length, .slice for 5 most popular
  let popList = [...books];
  mostPopularBooks = [];
  for (let book in popList) {
    popList = popList.filter((book) => book.title, book.borrows);
    let name = popList[book].title;
    let count = popList[book].borrows.length;
    mostPopularBooks.push({ name: name, count: count });
  }
  mostPopularBooks.sort((a, b) => b.count - a.count);
  return mostPopularBooks.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const mostPopularAuthors = [];
  for (let i = 0; i < authors.length; i++) {
    const authorObj = {
      name: authors[i].name.first + " " + authors[i].name.last,
      count: 0,
    };

    for (let j = 0; j < books.length; j++) {
      if (books[j].authorId === authors[i].id) {
        authorObj.count += books[j].borrows.length;
      }
    }
    mostPopularAuthors.push(authorObj);
  }
  mostPopularAuthors.sort((a, b) => b.count - a.count);
  return mostPopularAuthors.slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
