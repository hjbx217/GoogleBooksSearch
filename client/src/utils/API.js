import axios from "axios";

export default {
  //Gets Google API
  getGoogle: function (query) {
    console.log(query);
    // let newQuery = "/?query=" + query
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    // return axios.get("/api/google" + newQuery);
  },

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },

  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },

  // Saves a book to the database
  saveBook: function (savedBooks) {
    return axios.post("/api/books", savedBooks);
  },

  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }

}

