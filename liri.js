require("dotenv").config();

const keys = require('./key.js')
const Spotify = require('node-spotify-api');
const fs = require('fs');

var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);


// This is the spotify-this-song search,
function spotifyIt(songName) {

	spotify.search({ type: 'track', query: songName, limit: 2 }, function (err, data) {
		if (err) {
			return console.log('Error occurred: ' + err);
		}

		var artist = data.tracks.items[0].artists[0].name;
		var song = data.tracks.items[0].name;
		var previewURL = data.tracks.items[0].album.external_urls.spotify;
		var album = data.tracks.items[0].album.name;


		// Log song info.
		console.log('---------Spotify Info-----------')
		console.log('Artist(s): ' + artist);
		console.log('Song: ' + song);
		console.log('Preview Link: ' + previewURL);
		console.log('Album: ' + album);
		console.log('--------------------------------')

	})
};


// Take in user input and store in variables. Input is left blank and filled in using for loop to catch extra pieces.
var command = process.argv[2];
var input = "";

// Loops through last response to put together all pieces. if left blank, it defaults to "The Sign"
if (process.argv[3] && process.argv[2] === "spotify-this-song") {
	for (let i = 3; i < process.argv.length; i++) {
		if (process.argv[i]) {
			input = input + " " + process.argv[i];
		}
	}
} else {
	input = "The Sign Ace Base";
};

// Logs each command to a log.txt file and creates a new line for each command.
fs.appendFile('log.txt', 'Command: ' + command + ', Input: ' + input + '\n');

// function that runs spotify-this-song. Change to switch, if using multiple functions.
spotifyIt(input); 