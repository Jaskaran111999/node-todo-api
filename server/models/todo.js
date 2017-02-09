const mongoose = require('mongoose');

var Todo = mongoose.model('todos', {
	text: {
		type: String,
		required: true,
		trim: true,
		minLength: 1
	},
	completed: {
		type: Boolean,
		default: false,
		required: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {Todo};
