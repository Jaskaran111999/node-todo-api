var mongoose = require('./db/mongoose.js');
var Todo = require('./models/todo.js').Todo;
var User = require('./models/user.js').User;
var ObjectID = require('mongodb').ObjectID;

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

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send(todos);
	}, (e) => {
		res.status(400).send(e);
	});
});

// GET /todos/1231234

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	
	if(!ObjectID.isValid(id)) {
		console.log('Id not valid');
		return res.status(404).send();
	}
	else {
		Todo.findById(id).then((todos) => {
			if(!todos) {
				return res.status(404).send();
			}
			res.send(todos);
		}, (e) => {
			res.send(e);
		}).catch((e) => {
			res.status(400).send();
		});
	}
});

app.listen(3000, () => {
	console.log('Started on port 3000 :)')
});