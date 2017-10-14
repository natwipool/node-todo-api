const mongoose = require('mongoose');

var Users = mongoose.model('Users', {
  name: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  }
});

module.exports = { Users };