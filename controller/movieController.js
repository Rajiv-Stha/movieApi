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

const searchMovieByName = (req, res) => {
  const { name } = req.query;
  const allMovies = [...movie.comedy, ...movie.horror, thumbnails];

  const regex = new RegExp(name, "i"); // 'i' flag makes the search case-insensitive
  const searchedMovie = allMovies.filter((movie) => regex.test(movie.title));
  return res.status(200).json({ message: searchedMovie, success: true });
};
module.exports = { getMovie, getThumbnail, getSingleMovie, searchMovieByName };
