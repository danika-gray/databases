var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
      if (err) {
        console.log('error getting messages');
      } else {
        // res.status(200).res.send(JSON.stringify(data));
        res.json(data);
      }
    });
  },

  post: function (req, res) {
    // console.log('request', req.body);
    const data = {username: req.body.username};
    models.users.create({username: req.body.username}, (err, result) => {
      if (err) {
        res.status(404);
      } else {
        res.json(result);
      }
    });
  }
};
