const { movie, thumbnails } = require("../utils/data");

const getMovie = (req, res) => {
  const { category } = req.query;

  if (category) {
    res.status(200).json({ message: movie[category] });
  } else {
    res.status(200).json({ message: movie });
  }
};

const getThumbnail = (req, res) => {
  res.status(200).json({ message: thumbnails });
};
const getSingleMovie = (req, res) => {
  const { id } = req.params;
  const allMovies = [...movie.comedy, ...movie.horror, ...thumbnails];
  const foundMovie = allMovies.find((movie) => movie.id == id);
  if (foundMovie) {
    res.status(200).json({ message: foundMovie });
  } else {
    res.status(404).json({ message: "Movie not found with this id " });
  }
};
module.exports = { getMovie, getThumbnail, getSingleMovie };
