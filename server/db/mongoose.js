const mongoose = require('mongoose');

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://todoapp:123454321@ds121345.mlab.com:21345/todo-app'
};

mongoose.connect(db.mlab || db.localhost);

module.exports = { mongoose };