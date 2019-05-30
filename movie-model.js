const mongoose = require('mongoose');

const { Schema } = mongoose;

// TODO: read up on mongo date format

const MovieSchema = new Schema({
  title: String,
  // release_date: Date,
  overview: String,
});

module.exports = mongoose.model('Movie', MovieSchema);
