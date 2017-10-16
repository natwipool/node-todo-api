const mongoose = require('mongoose');

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://natwipool:n0870726321@ds121345.mlab.com:21345/todo-app'
}

mongoose.Promise = global.Promise;
mongoose.connect(db.localhost || db.mlab, { useMongoClient: true });

module.exports = { mongoose };