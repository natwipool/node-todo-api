const express = require('express');
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/Todo');
var { Users } = require('./models/Users');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  
  var newTodo = new Todo({
    text: req.body.text
  });

  newTodo.save().then((doc) =>{
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});