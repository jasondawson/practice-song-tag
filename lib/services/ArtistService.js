var ArtistModel = require('./../models/ArtistModel');
var SongModel = require('./../models/SongModel');
var q = require('q');


module.exports.saveArtist = function(artist) {
	var dfd = q.defer();
	ArtistModel(artist).save(function(err, res) {
		if (!err) {
			dfd.resolve(res);
		} else {
			dfd.reject(err);
		}
	})

	return dfd.promise;
}

module.exports.saveSong = function(song) {
	var dfd = q.defer();
	SongModel(song).save(function(err, res) {
		if (!err) {
			dfd.resolve(res);
		} else {
			dfd.reject(err);
		}
	})

	return dfd.promise;
}