const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/Todo');
const { User } = require('./../../models/User');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

var users = [
  {
    _id: userOneId,
    email: 'natwipool@test.com',
    password: 'passwordOne',
    tokens: [
      {
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth'}, 'secretmessage').toString()
      }
    ]
  },
  {
    _id: userTwoId,
    email: 'natwipool@testTwo.com',
    password: 'passwordTwo',
    tokens: [
      {
        access: 'auth',
        token: jwt.sign({ _id: userTwoId, access: 'auth'}, 'secretmessage').toString()
      }
    ]
  }
];

var todos = [
  {
    _id: new ObjectID(),
    text: 'First test todo',
    _creator: userOneId
  },
  {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 3456,
    _creator: userTwoId
  }
];

var populateUsers = done => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done()); 
}

var populateTodos = done => {
  Todo.remove({}).then(() => {
    
    return Todo.insertMany(todos);
  }).then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers };
