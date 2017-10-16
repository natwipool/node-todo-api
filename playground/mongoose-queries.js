const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { Users } = require('./../server/models/Users');

const id = '59e0bb5ebf2b9a21187374c4';

// Result is Array of result
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Result is Object(document)
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById({
//   _id: id
// }).then((todo) => {
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

Users.findById({ _id: id }, 'name email')
  .then(user => {
    if (!user) {
      return console.log('User not found.');
    }
    console.log('Name:', user.name);
    console.log('Email:', user.email);
  })
  .catch(e => console.log(e));
