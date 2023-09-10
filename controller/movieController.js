const { movie } = require("../utils/data");

const getMovie = (req, res) => {
  const { category } = req.query;
  if (category) {
    res.status(200).json({ message: movie[category] });
  } else {
    res.status(200).json({ message: movie });
  }
};
module.exports = { getMovie };
