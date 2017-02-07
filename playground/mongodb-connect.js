//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); //object desructuring (works on node v6.x and above)

var obj = new ObjectID();
console.log(obj+'\n'+obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, results) => {
	// 	if (err) {
	// 		return console.log('Unable to insert', err);
	// 	}
	// 	console.log('Document inserted :)\n'+JSON.stringify(results.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'singh',
	// 	age: '18',
	// 	location: 'Something'
	// }, (err, results) => {
	// 	if(err) {
	// 		return console.log('Unable to insert document...\n', err);
	// 	}
	// 	console.log('Document inserted :)\n'+JSON.stringify(results.ops, undefined, 2));
	// });

	db.close();
})