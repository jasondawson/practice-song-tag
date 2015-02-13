var Mongoose = require('mongoose');
var Artist = require('./ArtistModel.js');
var Tag = require('./TagModel.js');
var Schema = Mongoose.Schema;

var schema = Schema({
	name: {type: String, required: true, index: true},
	album: {type: String, required: true},
	genre: {type: String, required: true},
	releasedOn: {type: Date, required: true},
	isExplicit: {type: Boolean, required: true},
	artist: {type: Schema.Types.ObjectId, ref: 'Artist'},
	tags: [{type: String, ref: 'Tag'}]
});

module.exports = Mongoose.model('Song', schema);