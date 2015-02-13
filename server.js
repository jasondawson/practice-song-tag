var express = require('express');
var Mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ArtistCtrl = require('./lib/controllers/artistCtrl.js')

var port = 8080;

var app = express();

var mongoUri = 'mongodb://localhost:27034/song-tag';
app.use(bodyParser.json());

//initialize & connect DB
Mongoose.connect(mongoUri);
db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
	console.log('connected to db');
});

//routes go here

app.post('/api/artists', ArtistCtrl.postArtist);

app.get('/api/artists', ArtistCtrl.getAll);

app.get('/api/artists/:id', ArtistCtrl.getByName);

app.post('/api/artists/:id/songs', ArtistCtrl.postSong);


app.listen(port, function() {
	console.log('Listening on port ' + port);
});
