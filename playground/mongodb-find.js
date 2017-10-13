const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Uable to connect to Mongodb server.');
  }
  
  console.log('Connect to Mongodb server');

  db.collection('Todos').find({
    completed: true
  }).count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unabel to fetch Todos', err);
  });

  db.collection('Users').find({
    name: 'Natwipool'
  }).toArray().then((result) => {
    console.log('Users');
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  
  // db.close();
})