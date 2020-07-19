

const db = require("../models");
const axios = require("axios");


// Export an object containing methods we'll use for accessing the Dog.Ceo API

module.exports = {
    getBooks: function(req,res) {
      const { query: params } = req;
      console.log(params);
      console.log(req);
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + params + "&key=AIzaSyBdQ2Bs-R75-Er61nFIrfvm1i5zhnuCU5I")
      .then((response) => {
        console.log(response.data)
        res.json(response.data)
        // res.send("Hello");
      }).catch(err => {
        console.log(err);
      });
    }
  };