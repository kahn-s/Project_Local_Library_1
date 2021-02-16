function totalBooksCount(books) {
  let totalBooksCount = 0;
  books.forEach(function (book) {
    if ("title") {
      totalBooksCount += 1;
    }
  });
  return totalBooksCount;
} //this works

function totalAccountsCount(accounts) {
  let totalAccountsCount = 0;
  accounts.forEach(function (account) {
    if ("id") {
      totalAccountsCount += 1;
    }
  });
  return totalAccountsCount;
} //this works

function booksBorrowedCount(books) {
  const newBooks = [...books];
  let booksBorrowedCount = 0;
  newBooks.forEach(function (book) {
    if (!book.borrows[0].returned) {
      booksBorrowedCount += 1;
    }
  });
  return booksBorrowedCount;
} //this works

function getMostCommonGenres(books) {
  let genresList = [];
  let mostCommonGenres = [];
  for (let book in books) {
    let genre = books[book].genre;
    genresList.push(genre);
  }
  while (genresList[0]) {
    let holdingArray = [];
    holdingArray = genresList.filter((value) => value === genresList[0]);
    let countedGenre = { name: genresList[0], count: holdingArray.length };
    mostCommonGenres.push(countedGenre);
    genresList = genresList.filter((value) => value != genresList[0]);
    holdingArray = [];
  }
  mostCommonGenres.sort((a, b) => b.count - a.count);
  return mostCommonGenres.slice(0, 5);
} //this works

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
} //this works

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
