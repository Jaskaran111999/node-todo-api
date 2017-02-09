const mongoose = require('mongoose');

var User = mongoose.model('Users', {
	emailId: {
		type: String,
		minLength: 10,
		required: true,
		trim: true
	},
	password: {
		type: String,
		minLength: 8,
		required: true
	}
});

module.exports = {User};