const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));



app.set('view engine', 'ejs');

var routes_setter = require('./config/routes.js');
routes_setter(app);

// app.get('/', function (req, res) {
//   knex('pets')
//   .then((petsList) => {
//     res.render('pets', {pets: petsList})
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   res.send("hello");
// });
//
// app.post('/', function (req, res) {
//   knex('pets')
//   .insert({
//     name: req.body.name,
//     type: req.body.type,
//     gender: req.body.gender
//   }, '*')
//   .then((newPet) => {
//     console.log(newPet);
//     res.redirect('/');
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// });

app.listen(port, function() {
  console.log('Listening on', port);
});
