### liri-node-app

This app can take in the commands directly below along with some user info to gather information for you.

##1 - 'spotify-this-song' <song name> '\n'
	This can also take in artist names and can be multiple words to pull back a response. It will provide back relevant info about the input provided.
![spotify-this-song_command](https://user-images.githubusercontent.com/29190130/38388644-11d66534-38d9-11e8-8700-c2be36e43418.PNG)

#2 - 'movie-this' <movie title>
	This will put relevant movie details for the movie that matchs the movie title provided. This is currently not a search so the name has to be an exact match or it will either not find a movie or not find the correct movie you meant. If no user input (movie title) is provided, it will default to Mr. Nobody.
	
![movie-this_command](https://user-images.githubusercontent.com/29190130/38388660-1dd0d450-38d9-11e8-8277-a038936a5f34.PNG)

#3 - 'my-tweets' (optional) <User Name>
	This function will provide back the last 20 tweets and their creation times for a user name provided. If no user name is given, it will default to a dummy account that was created for this assignment.
![my-tweets_command](https://user-images.githubusercontent.com/29190130/38388652-17c4b59a-38d9-11e8-8c66-089be49d0406.PNG)

#4 - 'do-what-it-says' 
	This function will pull text from the random.txt file and run the first command and input provided. 
	

## Log Command and Input
The Liri app will also log each command and input the user provides into a log.txt file.
![log](https://user-images.githubusercontent.com/29190130/38388665-2110870a-38d9-11e8-8d42-ca01ead29b13.PNG)


## Bad Command
If the user provides a bad command, the app will prompt the user the correct ways to type in each function so it works.
![bad_command](https://user-images.githubusercontent.com/29190130/38388671-250a9364-38d9-11e8-9b3f-3f6998cc19a9.PNG)




