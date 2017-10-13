const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Uable to connect to Mongodb server.');
  }

  console.log('Connect to Mongodb server');

  db.collection('Todos').insertOne({
    text: 'Walk the dog',
    completed: true
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // db.collection('Users').insertOne({
  //   name: 'Natwipool',
  //   age: 39,
  //   location: 'Bangkok Thailand'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  db.close();
})