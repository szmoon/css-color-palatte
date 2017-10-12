const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const compiler = webpack(webpackConfig);


// // database connection 
// const pg = require('pg');
// const uri = 'postgres://toast:sits@localhost/csscolorpalette';

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

// // functions to export
// module.exports = function(data) {
//   //place code here

  
// };

// server connection
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});




// // PGP Test
// var pgp = require('pg-promise')(/*options*/)
// var db = pgp('postgres://postgres:postgres@localhost:3000/csscolorpalette')

// db.one('SELECT * FROM saved_palettes')
//   .then(function (data) {
//     console.log('DATA:', data.value)
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error)
//   })


// PG Test
// const pg = require('pg');
// const conString = 'postgres://postgres:postgres@localhost:3000/csscolorpalette';

// Useless new version stuff 
// // const { Client } = require('pg')

// // const client = new Client({
// //   host: 'localhost',
// //   port: 3000,
// //   user: 'postgres',
// //   password: 'postgres',
// //   database: 'csscolorpalette',
// // })

// const client = new Client({
//   connectionString: 'postgres://postgres:postgres@localhost/csscolorpalette'
// });

// client.connect((err) => {
//   // console.log("boop");
//   if (err) {
//     console.log("boo error", err);
//   } else {
//     console.log("yay no error");
//   }
  
//   // var query = client.query("SELECT * FROM saved_palettes");
//   // console.log("res" + query);
//   // done();
// });

// client.end();

