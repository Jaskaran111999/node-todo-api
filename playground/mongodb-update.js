const MongoClient = require('mongodb').MongoClient;
//const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   text: 'Walk the dog'
  // }, {
  //   completed: true
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
      name: 'singh'
    }, {
      $set: {
         name: 'Jaskaran Singh'
      },
      $inc: {age: 1}
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });


  // db.close();
});
