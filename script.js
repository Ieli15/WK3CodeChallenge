const baseURL = "http://localhost:3000/films";
const filmsList = document.querySelector("#films");
const poster = document.querySelector("#poster");
const title = document.querySelector("#title");
const runtime = document.querySelector("#runtime");
const showtime = document.querySelector("#showtime");
const availableTickets = document.querySelector("#available-tickets");
const buyButton = document.querySelector("#buy-ticket");

// Load initial movie and movie list
document.addEventListener("DOMContentLoaded", () => {
  fetchMovies();
  fetchMovieDetails(1);
});

// using Fetch to get all movies from the list
function fetchMovies() {
  fetch(baseURL)
    .then((res) => res.json())
    .then((movies) => {
      renderMoviesList(movies);
    });
}

function renderMoviesList(movies) {
  filmsList.innerHTML = ""; // Clear placeholder
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie.title;
    li.className = "film item";
    li.addEventListener("click", () => fetchMovieDetails(movie.id));
    filmsList.appendChild(li);
  });
}

// Fetch and display movie details
function fetchMovieDetails(id) {
  fetch(`${baseURL}/${id}`)
    .then((res) => res.json())
    .then((movie) => {
      displayMovieDetails(movie);
    });
}

function displayMovieDetails(movie) {
  poster.src = movie.poster;
  title.textContent = movie.title;
  runtime.textContent = `Runtime: ${movie.runtime} minutes`;
  showtime.textContent = `Showtime: ${movie.showtime}`;
  const remainingTickets = movie.capacity - movie.tickets_sold;
  availableTickets.textContent = `Available Tickets: ${remainingTickets}`;
  buyButton.onclick = () => handleTicketPurchase(movie, remainingTickets);
}

// Handle ticket purchase
function handleTicketPurchase(movie, remainingTickets) {
  if (remainingTickets > 0) {
    const updatedTickets = remainingTickets - 1;
    availableTickets.textContent = `Available Tickets: ${updatedTickets}`;
    movie.tickets_sold += 1;
    console.log("Ticket purchased for:", movie.title);
  } else {
    alert("Sorry, the show is sold out!");
  }
}
