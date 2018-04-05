## liri-node-app

This app can take in the commands directly below along with some user info to gather information for you.

#1 - 'spotify-this-song' <song name>
	This can also take in artist names and can be multiple words to pull back a response. It will provide back relevant info about the input provided.

#2 - 'movie-this' <movie title>
	This will put relevant movie details for the movie that matchs the movie title provided. This is currently not a search so the name has to be an exact match or it will either not find a movie or not find the correct movie you meant. If no user input (movie title) is provided, it will default to Mr. Nobody.

#3 - 'my-tweets' (optional) <User Name>
	This function will provide back the last 20 tweets and their creation times for a user name provided. If no user name is given, it will default to a dummy account that was created for this assignment.

#4 - 'do-what-it-says'
	This function will pull text from the random.txt file and run the first command and input provided. 