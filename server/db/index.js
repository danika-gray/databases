var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

// Get
exports.getRequest = function(rows, source, callback) {
  exports.connection.query(
  //sql request,

    `SELECT ${rows} FROM ${source};`,
    function(err, results, fields) {
      if (err) {
        console.log('get request failed');
      } else {
        // console.log('these are the results', results);
        // console.log('these are the fields', fields);
        callback(null, results);
        // format results and send to controller
      }
    }
  );
};

//Post
// messages and users - make separate post requests to decrease
// complexity of string interpolation!

exports.postRequest = function(table, newValues, callback) {
  console.log(table, 'table');
  console.log(newValues, 'newValues');

  exports.connection.query(
    `INSERT INTO ? VALUES ?;`, [table, newValues],
    function(err, results) {
      if (err) {

        console.log(err);
      } else {
        callback(null, results);
      }
    }); /* callback to say
  that data has been sent*/

  // insert into users (username) values ('Valjean');

  // connection.query(`INSERT INTO rooms(room) VALUES ${data.roomname};`, (err, results) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     callback(results);
  //   }
  // });

  // connection.query(`INSERT INTO messages(text) VALUES ${data.text}`, callback);
  // // rooms: `INSERT` INTO tablename(columns) VALUES (new column values)
  // // messages:
  // // callback -> (err, results, fields)
  // // username, text, roomname
};