var models = require('../models');

//send('GET request to the homepage')
//send('hello world')

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        console.log('error getting messages');
      } else {
        // res.status(200).res.send(JSON.stringify(data));
        res.json(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    const data = {text: req.body.text, username: req.body.username, roomname: req.body.roomname};
    models.messages.create(data, (err, result) => {
      if (err) {
        res.status(404);
      } else {
        res.json(result);
      }
    });
  } // a function which handles posting a message to the database
};
