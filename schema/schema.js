var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
	name: { type: String, trim: true}
});