const router = require("express").Router();
const {
  getMovie,
  getThumbnail,
  getSingleMovie,
  searchMovieByName,
} = require("../controller/movieController");

router.get("/movie/search", searchMovieByName);
router.get("/movie", getMovie);
router.get("/thumbnail", getThumbnail);
router.get("/movie/:id", getSingleMovie);

module.exports = router;
