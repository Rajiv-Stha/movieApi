const router = require("express").Router();
const { getMovie } = require("../controller/movieController");
const { movie } = require("../utils/data");

router.get("/movie", getMovie);

module.exports = router;
