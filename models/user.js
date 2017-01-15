var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	username: { type: String, require: true, unique: true},
	password: { type: String, require:true },
	admin: Boolean,
	location: String,
	meta: {
		age: Number,
		website: String
	},
	created_at: Date,
	updated_at: Date
});

var User = mongoose.model('abc', userSchema);

module.exports = User;