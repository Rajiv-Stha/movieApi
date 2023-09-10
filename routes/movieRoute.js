const router = require("express").Router();
const { getMovie, getThumbnail } = require("../controller/movieController");
const { movie } = require("../utils/data");

router.get("/movie", getMovie);
router.get("/thumbnail", getThumbnail);

module.exports = router;
