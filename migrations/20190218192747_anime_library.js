
exports.up = function(knex, Promise) {
  return knex.schema.createTable('anime_library',(list) => {

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('anime_library');
};
