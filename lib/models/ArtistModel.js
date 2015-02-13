var Mongoose = require('mongoose');
var Song = require('./SongModel.js');
var Schema = Mongoose.Schema;

var schema = Schema({
	name: {type: String, required: true},
	bio: {type: String},
	genres: [{type: String, unique: true}],
	songs: [{type: Schema.Types.ObjectId, ref: 'Song'}]
});

module.exports = Mongoose.model('Artist', schema);