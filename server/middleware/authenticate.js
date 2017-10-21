var { User } = require('./../models/User');

var authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  User.findByToken(token)
    .then(user => {
      if (!user) {
        return Promise.reject(); // go to run "catch((e)=> { })"
      }

      req.user = user;
      req.token = token;
      next();
    })
    .catch(e => {
      res.status(401).send();
    });
};

module.exports = { authenticate };
