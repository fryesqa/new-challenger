var pg = require('pg');

var pgClient = new pg.Client();

pgClient.connect(function(err) {
  if (err) {
    console.warn('error in connecting to heroku postgreSQL db:', err);
  }

  console.log('Connected to postgres!');
  // client
  //   .query('SELECT table_schema, table_name FROM information_schema.tables;')
  //   .on('row', function(row) {
  //     console.log(JSON.stringify(row));
  //   });
})

module.exports = pgClient; 
