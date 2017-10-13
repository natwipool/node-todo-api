const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connent to MongoDB server', err);
  }

  console.log('Connect to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59e0914e64bdd9aa50dbdeb7')
  // }, {
  //   $set: {
  //     text: "Eat lunch",
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Natwipool'
  }, {
    $set: {
      name: 'Natwipol'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('59e07d1864bdd9aa50dbdb26')
  // }, {
  //   $inc: {
  //     age: +1
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(result => {
  //   console.log(result);
  // });

});
