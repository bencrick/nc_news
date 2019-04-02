const makeTimestamp = require('../../utils/makeTimestamp');

exports.up = function(knex, Promise) {
  console.log('creating comment table...');
  return knex.schema.createTable('comments', commentTable => {
    commentTable.increments('comment_id').primary();
    commentTable.string('author').references('users.username');
    commentTable.integer('article_id').references('articles.article_id');
    commentTable.integer('votes').defaultTo(0);
    //2016-06-22 19:10:25
    commentTable.timestamp('created_at').defaultTo(knex.fn.now());
    commentTable.text('body');
  });
};

exports.down = function(knex, Promise) {
  console.log('removing comment table...');
  return knex.schema.dropTable('comments');
};
