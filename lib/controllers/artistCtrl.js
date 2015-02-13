var Mongoose = require('mongoose');
var ArtistService = require('./../services/ArtistService')
var ArtistModel = require('./../models/ArtistModel.js');

//api/artists
module.exports.postArtist = function(req, res) {
	ArtistService
		.saveArtist(req.body)
		.then(function(response) {
			res.status(200).json(response);
		}, function(err) {
			res.status(400).json(err);
		}
	);
};

//api/artists/:id/songs
module.exports.postSong = function(req, res) {
	var song = req.body;
	ArtistModel
		.findOne({name: req.params.id})
		.exec()
		.then(function(response) {
			req.body.artist = response._id;
			console.log(song.artist);
			ArtistService
				.saveSong(req.body)
				.then(function(response) {
					res.status(200).json(response);
				}, function(err) {
					res.status(400).json(err);
				}
			);
		});
};

//api/artists
module.exports.getAll = function(req, res) {
	ArtistModel
		.find()
		.limit(50)
		.populate('songs')
		.exec()
		.then(function(response) {
			return res.status(200).json(response);
		})
}

//api/artists/:id
module.exports.getByName = function(req, res) {
	ArtistModel
		.find({name: req.params.id})
		.limit(50)
		.populate('songs')
		.exec()
		.then(function(response) {
			return res.status(200).json(response);
		})
}
