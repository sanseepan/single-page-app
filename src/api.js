const bookApi = {
  books: [
    { number: 1, name: "yuha" },
    { number: 2, name: "visva" },
    { number: 3, name: "lisa" },
    { number: 4, name: "mond" },
    { number: 5, name: "maya" },
    { number: 6, name: "akar" },
    { number: 7, name: "misha" },
    { number: 8, name: "maro" }
  ],

  getAllBooks: function() {
    return this.books;
  },
  getBook: function(id) {
    const isBook = b => b.number === id;
    return this.books.find(isBook);
  }
};

export default bookApi;
