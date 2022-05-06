var db = require('../db');
// exports.connection = require('../db/index');

module.exports = {
  getAll: function (callback) {
    const rows = 'messages.*, users.username, rooms.room';
    const source = 'messages INNER JOIN users IN(messages.userID = users.userID) INNER JOIN rooms IN(messages.roomID = rooms.roomID)';
    db.getRequest(rows, source, callback);

    // get messageID, userID, roomID, text
    // use the roomID and userID to get roomname and username
    // pass data to controllers with message text, roomname, username
  }, // a function which produces all the messages

  create: function (data, callback) {
    const table = 'messages(text, userID, roomID)';
    const newValues = `(${data.text}, (SELECT users.userID FROM users WHERE username = ${data.id}), (SELECT rooms.roomID FROM rooms WHERE roomname = ${data.roomname}))`;
    db.postRequest(table, newValues, callback);
    // post updates userID, roomID

  } // a function which can be used to insert a message into the database
  // INSERT INTO tablename(columns) VALUES (new column values)


};


