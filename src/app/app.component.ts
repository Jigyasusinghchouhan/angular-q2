class Book {
  title: string;
  author: string;
  numPages: number;
  publisher: string;
  publicationYear: number;

  constructor(title: string, author: string, numPages: number, publisher: string, publicationYear: number) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.publisher = publisher;
    this.publicationYear = publicationYear;
  }
}

class Library {
  books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(title: string): void {
    this.books = this.books.filter((book) => book.title.toLowerCase() !== title.toLowerCase());
  }

  searchByTitle(title: string): Book[] {
    const foundBooks: Book[] = [];

    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title.toLowerCase().indexOf(title.toLowerCase()) !== -1) {
        foundBooks.push(this.books[i]);
      }
    }

    return foundBooks;
  }

  searchByAuthor(author: string): Book[] {
    const foundBooks: Book[] = [];

    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].author.toLowerCase().indexOf(author.toLowerCase()) !== -1) {
        foundBooks.push(this.books[i]);
      }
    }

    return foundBooks;
  }
}
const library = new Library();

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 310, 'Mariner Books', 2012);
const book2 = new Book('1984', 'George Orwell', 328, 'Signet Classics', 2003);
const book3 = new Book('The Catcher in the Rye', 'J.D. Salinger', 224, 'Back Bay Books', 2001);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.removeBook('1984');

const searchResults = library.searchByTitle('hobbit');
console.log(searchResults);