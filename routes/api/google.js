const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"

router.route("/")
  .get(googleController.getBooks);

module.exports = router;
