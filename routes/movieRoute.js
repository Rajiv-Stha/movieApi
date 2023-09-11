const router = require("express").Router();
const {
  getMovie,
  getThumbnail,
  getSingleMovie,
} = require("../controller/movieController");

router.get("/movie", getMovie);
router.get("/thumbnail", getThumbnail);
router.get("/movie/:id", getSingleMovie);

module.exports = router;
