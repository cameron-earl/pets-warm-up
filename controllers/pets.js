const knex = require("../db/knex.js");

module.exports = {
  getAll: function (req, res) {
    knex('pets')
    .then((petsList) => {
      res.render('pets', {pets: petsList})
    })
    .catch((err) => {
      console.log(err);
    })
  },

  create: function (req, res) {
    knex('pets')
    .insert({
      name: req.body.name,
      type: req.body.type,
      gender: req.body.gender
    }, '*')
    .then((newPet) => {
      console.log(newPet);
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
