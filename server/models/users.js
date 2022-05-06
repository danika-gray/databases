var db = require('../db');

module.exports = {
  getAll: function (callback) {
    const rows = 'users.*';
    const source = 'users';
    db.getRequest(rows, source, callback);
  },

  create: function (data, callback) {
    console.log('data in models/users', data.username);

    var table = 'users(username)';
    var newValues = `('${data.username}')`;
    db.postRequest(table, newValues, callback);
  }
};

