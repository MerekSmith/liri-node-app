require("dotenv").config();

const keys = require('./key.js')
const Spotify = require('node-spotify-api');
const Twitter = require('twitter');
const request = require('request');
const fs = require('fs');

// API keys for Twitter and Spotify
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Take in user input and store in variables. Input is left blank and filled in using for loop to catch extra pieces.
var command = process.argv[2];
var input = "";

// This is the spotify-this-song search,
function spotifyIt(songName) {

	spotify.search({ type: 'track', query: songName, limit: 1 }, function (err, data) {
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


// This is the twitter 'my-tweets' function
function myTweets(userName) {
	var params = { screen_name: userName };
	client.get('statuses/user_timeline', params, function (error, tweets, response) {
		if (error) {
			return console.log('Error: ' + error);
		}

		for (let i = 0; i < tweets.length; i++) {
			console.log('Tweet ' + i + ' :' + tweets[i].text);
			console.log('Created: ' + tweets[i].created_at);
			console.log('-------------------');
		}
	});
};


// This is the function for the OMDB movie-this search.
function movieThis(input) {

	request('http://www.omdbapi.com/?apikey=trilogy&t=' + input, function (error, response, body) {

		var omdbData = JSON.parse(body);
		if (omdbData.Response === 'False') {
			return console.log('Error:', omdbData.Error); // Print the error if one occurred
		}
		console.log('---------Movie Details-----------');
		console.log('Movie Title: ', omdbData.Title);
		console.log('Year: ', omdbData.Year);
		if (omdbData.Ratings[1]){
			console.log('Rotten Tomatoes Rating: ' + omdbData.Ratings[1].Value);
		} else {
			console.log('Rotten Tomatoes Rating Does Not Exist');
		}
		console.log('Country: ' + omdbData.Country);
		console.log('Language: ' + omdbData.Language);
		console.log('Plot: ' + omdbData.Plot);
		console.log('Actors: ' + omdbData.Actors);
		console.log('----------------------------------');
	});
};

// This is for the do-what-it-says command which just looks at the random.txt file to get a command and input. The txt file can be changed to be a different command and input but this will only capture the first 2 pieces (one command and one input).
function Random() {
	fs.readFile('random.txt', 'utf8', function (error, data) {

		if (error) {
			return console.log('Error: ' + error);
		}

		var commandArray = data.split(',');
		command = commandArray[0];
		input = commandArray[1];
		console.log('random array', commandArray)
	});
};


// Loops through last response to put together all pieces. if left blank, it defaults to "The Sign"
function spotifyInput() {
	if (process.argv[3]) {
		for (let i = 3; i < process.argv.length; i++) {
			if (process.argv[i]) {
				input = input + " " + process.argv[i];
			}
		}
	} else {
		input = "The Sign Ace of Base";
	};
};

// Takes in user input for the movie-this command, updates it to the correct format and combines any additional words used. If no input was provided, it defaults to Mr. Nobody.
function movieInput() {
	if (process.argv[4]) {
		input = process.argv[3];
		for (let i = 4; i < process.argv.length; i++) {
			if (process.argv[i]) {
				input = input + "+" + process.argv[i];
			}
		}
	} else {
		input = "Mr.+Nobody";
	};
};

// This function handles the twitter input. The user can provide a username to pull tweets from. If left blank, the username will default to a dummy one created for this assignment.
function twitterInput() {
	if (process.argv[3] === '') {
		input = 'Merek19810253';
	} else {
		input = process.argv[3];
	}
};

// Logs each command to a log.txt file and creates a new line for each command.
fs.appendFile('log.txt', 'Command: ' + command + ', Input: ' + input + '\n');

// Switch function to check the command provided to then run the correct function and input.
switch (command) {
	case 'spotify-this-song':
		spotifyInput()
		spotifyIt(input);
		break;
	case 'my-tweets':
		twitterInput();
		myTweets(input);
		break;
	case 'movie-this':
		movieInput();
		movieThis(input);
		break;
	case 'do-what-it-says':
		Random();
		break;
	default:
		console.log('Please use the command "spotify-this-song" followed by a song title.');
};
