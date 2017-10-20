const pets = require('../controllers/pets.js');

module.exports = function(app){
  app.get('/', pets.getAll);

  app.post('/pets', pets.create);

}
