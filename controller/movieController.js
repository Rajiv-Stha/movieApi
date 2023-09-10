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
module.exports = { getMovie, getThumbnail };
