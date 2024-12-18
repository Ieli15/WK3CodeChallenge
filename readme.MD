# Flatdango - Movie Ticket Booking App
Flatdango is a simple movie ticket booking application for the Flatiron Movie Theater. Users can view a list of movies, see detailed information about a selected movie, and purchase tickets directly from the app.
## Features
View details for the first movie when the page loads.
Browse a list of all movies playing at the Flatiron Movie Theater.
See detailed information about a selected movie:
Movie poster
Title
Runtime
Showtime
Available tickets (calculated as capacity - tickets_sold)
Purchase tickets for a movie:
Decreases the available tickets count on the frontend.
Prevents purchasing tickets if the show is sold out.
Lightweight design and simple user interface.
## Technologies Used
HTML: For the structure of the webpage.
CSS: For styling the application.
JavaScript: For dynamic interactivity and fetching data.
JSON Server: For providing a mock backend to serve movie data.
## How to Use
View Movies List: The list of movies is displayed on the left-hand side of the page.
View Movie Details: Click on a movie title in the list to view its details on the right side of the screen.
Purchase Tickets: Click the "Buy Ticket" button to decrease the number of available tickets. If tickets are sold out, an alert will notify the user.
Project Structure
graphql
Copy code
flatdango/
│-- index.html       # Main HTML file
│-- style.css        # Styling for the application
│-- script.js        # JavaScript for interactivity and data fetching
│-- db.json          # JSON Server database file
Core Functionality
1. Fetching Movie Data
Fetch the first movie's details (GET /films/1) and display them when the page loads.
Fetch the list of all movies (GET /films) and display them in the sidebar.
2. Displaying Movie Details
Show the selected movie's poster, title, runtime, showtime, and number of available tickets.
Calculate available tickets as capacity - tickets_sold.
3. Purchasing Tickets
Clicking the "Buy Ticket" button decreases the ticket count on the frontend.
Prevent ticket purchases when no tickets are available.
