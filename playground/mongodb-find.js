const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID; 

//const {MongoClient, ObjectID} = require('mongodb'); //object desructuring (works on node v6.x and above)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('58998f9c2827d8161517c0fd')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	return console.log('Unable to fetch document :(\n', err);
	// });

	db.collection('Users').find({
		name: 'me'
	}).count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		return console.log('Unable to fetch document :(\n', err);
	});


	//db.close();
})