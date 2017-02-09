var mongoose = require('./db/mongoose.js');
var Todo = require('./models/todo.js').Todo;
var User = require('./models/user.js').User;

var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());

app.post('/todos', (req, res) => {

	var todo1 = new Todo({
		text: req.body.text
	});

	todo1.save().then((doc) => {
		res.send(doc);			
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000 :)')
});