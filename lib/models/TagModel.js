var Mongoose = require('mongoose');
var Song = require('./SongModel.js');
var Schema = Mongoose.Schema;

var schema = Schema({
	_id: {type: String, unique: true},
	songs: [{type: Schema.Types.ObjectId, ref: 'Song'}]
});

module.exports = Mongoose.model('Tag', schema);