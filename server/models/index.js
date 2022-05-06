exports.messages = require('./messages.js');
exports.users = require('./users.js');
//exports.connection = require('../db/index');

// // Get
// exports.getRequest = function(data, table) {
//   connection.query(
//   //sql request,
//     `SELECT '${data}' FROM '${table}';`,
//     // callback -> (err, results, fields)
//     function(err, results, fields) {
//       if (err) {
//         console.log('get request failed');
//       } else {
//         // format results and send to controller
//       }
//     }
//   );
// };

// //Post
// exports.postRequest = function(data, table) {
//   connection.query(
//   //sql request,
//   // INSERT INTO tablename(columns) VALUES (new column values)
//   // callback -> (err, results, fields)
//   );
// };