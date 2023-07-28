Movie Recommendation App
The Movie Recommendation App is a React-based web application that allows users to discover movie recommendations based on their favorite movie genres. The app leverages Redux for state management and integrates local storage for data persistence, ensuring users' preferences are preserved upon app reload.

Features
Fetches movie data from an external API using Redux async actions and stores it in the Redux store for easy access.
Implements a selection feature where users can choose their favorite movie genres, enabling them to tailor the movie recommendations to their preferences.
Allows users to select multiple genres, refining the recommendations according to their specific interests.
Provides a detailed view of each movie, including its rating and additional details obtained from the API.
Integrates local storage through Redux middleware functions, preserving user preferences and movie data across app reloads and refreshes.
Usage
Clone the repository to your local machine.
Install the required dependencies using npm install.
Obtain your Movie DB API key from https://www.themoviedb.org/ and replace 'YOUR_MOVIE_DB_API_KEY' in src/actions/movieActions.js with your API key.
Start the development server with npm start.
Open your browser and navigate to http://localhost:3000 to access the app.
How to Use
On the app's homepage, you'll see a list of checkboxes representing various movie genres such as Action, Comedy, Drama, and more.
Check the boxes for your favorite movie genres to refine the movie recommendations based on your preferences. You can select multiple genres.
The app will fetch movie data from the API and display the recommended movies according to your selected genres.
Click on a movie title to view more details, including the movie's rating and any additional information available from the API.
Your selected genres and movie data will be stored in local storage via Redux middleware, preserving your preferences for future sessions.
Dependencies
React
Redux
React Redux
Redux Thunk
Axios
