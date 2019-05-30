const Movie = require('./movie-model');

// TODO: validation, error handling, read up on methods in Mongoose docs!

const list = (_req, res) => {
  Movie
    .find()
    .then((movies) => {
      res.send(movies);
    });
};

// seems to be returning FULL list of movies rather than just one:
const find = (req, res) => {
  Movie
    .findOne({ title: req.params.movieTitle })
    .then((movie) => {
      res.send(movie);
    });
};

const create = (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    // release_date: req.body.release_date,
    overview: req.body.overview,
  });

  movie
    .save()
    .then((data) => {
      res.send(data);
    });
};

// const update = (req, _res) => {
//   Movie.updateOne({ title: req.params.movieTitle },
//     // TODO: read up on this method in Mongoose docs!
//   );
// };

// const remove = (req, res) => {
//   Movie.deleteOne({ title: req.params.movieTitle },
//     // TODO: read up on this method in Mongoose docs!
//   );
// };

module.exports = {
  list,
  find,
  create,
  // update,
  // remove,
};
