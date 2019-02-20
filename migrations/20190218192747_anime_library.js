
exports.up = function(knex, Promise) {
  return knex.schema.createTable('anime_library',(library) => {
      

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('anime_library');
};
