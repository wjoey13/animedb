
exports.up = function(knex, Promise) {
    return knex.schema.createTable('anime_episodes',(episode)=>{
        episode.increments('id')
        episode.int('number')
        episode.text('name')
        episode.string('language')
        episode.text('info')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('anime_episodes')
};
