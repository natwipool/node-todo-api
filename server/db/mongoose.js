const mongoose = require('mongoose');

var db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://todoapp:123454321@ds121345.mlab.com:21345/todo-app'
};

mongoose.Promise = global.Promise;
mongoose.connect(db.localhost ? db.localhost: db.mlab, {useMongoClient: true});

module.exports = { mongoose };