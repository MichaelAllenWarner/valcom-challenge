const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const movies = require('./movie-controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// CRUD

app.get('/movies', movies.list);
app.get('/movies/:movieTitle', movies.find);
app.post('/movies', movies.create);
// app.put('/:movieTitle', movies.update);
// app.delete('/:movieTitle', movies.remove);


// connect to database

const dbUrl = 'mongodb://localhost:27017/data';
mongoose.connect(dbUrl, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => {
  console.log('db connected');
});


//  connect app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
