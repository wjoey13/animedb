
exports.up = function(knex, Promise) {
    return knex.schema.createTable('anime_title',(title)=>{
        title.increments('id')
        title.text('title')
        title.string('genre')
        title.text('description')
        title.string('cover')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('anime_title')
};
