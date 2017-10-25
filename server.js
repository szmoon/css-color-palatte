// express
const express = require('express');
const app = express();
// body parser
const bodyParser = require('body-parser');
// webpack
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
// database connection 
const pg = require('pg');
// const uri = 'postgres://vkapcjif:If24WjJ5e1LSvool6IKNVi1N1Vs03Qa5@elmer.db.elephantsql.com:5432/vkapcjif';
const uri = 'postgres://toast:sits@localhost/csscolorpalette';



// server connection
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(express.static(__dirname + '/www'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 

// get saved palettes from database
app.get('/savedpalettes', (req, res, next) => {
  let results;
  // Get a Postgres client from the connection pool
  pg.connect(uri, (err, client, done) => {
    // Handle connection errors
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err });
    }
    // SQL Query > Select Data
    client.query('SELECT * FROM saved_palettes;', (err, result) => {
    if (err) throw new Error(err);
    // console.log(result.rows);
    console.log("get request");
    return res.json(result.rows);
    client.end();
  });


  });
});

// save to database
app.post('/savepalette', (req, res, next) => {
  let results;
  const data = req.body;
  console.log(data);
  pg.connect(uri, (err, client, done) => {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err });
    }

  console.log(data.paletteName);
    client.query('INSERT INTO saved_palettes (palette_name, square_arr) VALUES($1,$2);',
      [data.paletteName, data.squareArr]);

    const query = client.query('SELECT * FROM "saved_palettes";');
    query.on('row', (row) => {
      results = row;
    });
    query.on('end', function () {
      done();
      return res.json(results);
    });
  });
});


// //Original working connect to databases
// pg.connect(uri, (err, db) => {
//   if (err) throw new Error(err);
//   console.log("connected to db");
//   // make SQL queries
//   db.query('SELECT * FROM saved_palettes;', (err, result) => {
//     if (err) throw new Error(err);
//     console.log("result", result.rows);
//     db.end();
//   });
// });

 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});