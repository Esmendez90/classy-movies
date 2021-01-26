// Grab all the genre elements
var romance = $("#id-romanceCk");
var action = $("#id-actionCK");
var comedy = $("#id-comedyCK");
var drama = $("#id-dramaCK");
var allGenres = $("#id-allgenresCK");
var otherMovies = $("#id-otherCK");
// Grab the input element and search button
var movieInput = $("#id-movieinput");
var searchBtn = $("#id-searchBtn");

// When the user clicks on the search button then
// the movie they data is displayed
function searchMovies(event) {
  event.preventDefault();
  var movieSearch = movieInput.val();
  console.log(movieSearch);

  var apiKey = "f148652";
  var queryURL = `http://www.omdbapi.com/?t=${movieSearch}&apikey=${apiKey}`;

  $.ajax({
      url: queryURL,
      method: "GET",
  }).then(function(response){
      console.log(response);
  })
}


// onClick call of searchMovies function
searchBtn.on("click", searchMovies);
