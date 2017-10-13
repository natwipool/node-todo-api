const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Uable to connect to Mongodb server.');
  }

  console.log('Connect to Mongodb server');

  // Delete Many
  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });
  
  // Delete One
  // db.collection('Todos').deleteOne({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // Find One and Delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: "Natwipool"}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59e07d6c64bdd9aa50dbdb34')
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});