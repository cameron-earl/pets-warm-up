
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {name: 'Fluffy', type:"rabbit", gender:"female"},
        {name: 'Skittles', type:"cat", gender:"female"},
        {name: 'Rex', type:"dog", gender:"male"},
        {name: 'Tiny Tina', type:"dog", gender:"female"}
      ]);
    });
};
