//-------------------------------------vArs----------------------

var movie = "titanic"; //titanic is set as a default movie that will display on page
var title;
var year;
var poster;
var plot;
var localstore = "";
var html2 = "";
var store = [];
var x = 0;

var queryURL = `https://www.omdbapi.com/?t=${movie}&apikey=8e35679c`;

$("#search-by-title").prop("checked", false);
$("#action").prop("checked", false);
$("#comedy").prop("checked", false);
$("#family").prop("checked", false);
$("#romance").prop("checked", false);
$("#drama").prop("checked", false);

// Var genreContainer stores the form* element in html line 59 with an id of movie-genres-container
var genreContainer = $(".movie-genres-container");

// Event listener targets the entire form* element
genreContainer.click(function (event) {
  // The element that I click on will be save in var element
  var element = event.target;

  // IF the element I click on matches and element with an id of search-by-title
  // then it is true.
  if (element.matches("#search-by-title") === true) {
    $("#search-by-title").prop("checked", true);
    $("#action").prop("checked", false);
    $("#comedy").prop("checked", false);
    $("#family").prop("checked", false);
    $("#romance").prop("checked", false);
    $("#drama").prop("checked", false);

    $("#searchdiv").removeClass("hide");
    console.log("I selected Search by Title");

    // If true, then a movieInput block and a search button will be displayed on the page
    var html = `<input id="movieInput" type="text" placeholder="Movie Title"/> 
      <input id="searchBtn" type="button" value="search"/>`;
    document.getElementById("searchdiv").innerHTML = html;

    // If I click on the search button then the getmovie function will execute.
    buttonFunction = $("#searchBtn").on("click", getmovie);
  }

  // IF I click on any of the genres with matching id's
  // then that element will be true and a message will shown in the console.
  else if (element.matches("#action") === true) {
    $("#search-by-title").prop("checked", false);
    $("#action").prop("checked", true);
    $("#comedy").prop("checked", false);
    $("#family").prop("checked", false);
    $("#romance").prop("checked", false);
    $("#drama").prop("checked", false);
    $("#searchdiv").addClass("hide");
    console.log("I selected action genre");

    // Action movies array
    var topAction = [
      "the terminator",
      "robocop",
      "top gun",
      "die hard",
      "lethal weapon",
      "bad boys",
      "enter the dragon",
      "mad max",
      "the taking of pelham one two three",
    ];

    $("#display-movie-data").empty();

    for (var i = 0; i < topAction.length; i++) {
      movie = topAction[i];
      console.log(movie);
      getmovieInfo(movie);
    }
  } else if (element.matches("#comedy") === true) {
    $("#search-by-title").prop("checked", false);
    $("#action").prop("checked", false);
    $("#comedy").prop("checked", true);
    $("#family").prop("checked", false);
    $("#romance").prop("checked", false);
    $("#drama").prop("checked", false);

    $("#searchdiv").addClass("hide");
    console.log("I selected comedy genre");
    // Comedy movies array
    var topComedy = [
      "dumb and dumber",
      "the mask",
      "Mrs. doubtfire",
      "ghostbusters",
      "beverly hills cop",
      "beetlejuice",
      "fletch",
      "willy wonka & the chocolate factory",
      "the pink panther strikes again",
    ];
    $("#display-movie-data").empty();

    for (var i = 0; i < topComedy.length; i++) {
      movie = topComedy[i];
      console.log(movie);
      getmovieInfo(movie);
    }
  } else if (element.matches("#family") === true) {
    $("#search-by-title").prop("checked", false);
    $("#action").prop("checked", false);
    $("#comedy").prop("checked", false);
    $("#family").prop("checked", true);
    $("#romance").prop("checked", false);
    $("#drama").prop("checked", false);

    $("#searchdiv").addClass("hide");
    console.log("I selected family genre");

    var topFamily = [
      "jumanji",
      "back to the future",
      "raiders of the lost ark",
      "saturday night fever",
      "jaws",
      "e.t.",
      "matilda",
      "space jam",
      "the parent trap",
    ];

    $("#display-movie-data").empty();

    for (var i = 0; i < topFamily.length; i++) {
      movie = topFamily[i];
      console.log(movie);
      getmovieInfo(movie);
    }
  } else if (element.matches("#romance") === true) {
    $("#search-by-title").prop("checked", false);
    $("#action").prop("checked", false);
    $("#comedy").prop("checked", false);
    $("#family").prop("checked", false);
    $("#romance").prop("checked", true);
    $("#drama").prop("checked", false);

    $("#searchdiv").addClass("hide");
    console.log("I selected romance genre");

    var topRomance = [
      "titanic",
      "princess bride",
      "casablanca",
      "the african queen",
      "grease",
      "ghost",
      "the wedding singer",
      "moonstruck",
      "maurice",
    ];

    $("#display-movie-data").empty();

    for (var i = 0; i < topRomance.length; i++) {
      movie = topRomance[i];
      console.log(movie);
      getmovieInfo(movie);
    }
  } else if (element.matches("#drama") === true) {
    $("#search-by-title").prop("checked", false);
    $("#action").prop("checked", false);
    $("#comedy").prop("checked", false);
    $("#family").prop("checked", false);
    $("#romance").prop("checked", false);
    $("#drama").prop("checked", true);

    $("#searchdiv").addClass("hide");
    console.log("I selected drama genre");

    var topDrama = [
      "edward scissorhands",
      "forrest gump",
      "the bodyguard",
      "rain man",
      "the color purple",
      "dead poets society",
      "rocky",
      "dog day afternoon",
      "one flew over the cuckoo's nest",
    ];

    $("#display-movie-data").empty();

    for (var i = 0; i < topDrama.length; i++) {
      movie = topDrama[i];
      console.log(movie);
      getmovieInfo(movie);
    }
  }

  // IF I click anywhere else, within the form* element
  // then the following message will be displayed in the console.
  else {
    console.log("Please, select a genre or search by title");
  }
});

// ---------------- GET MOVIE INFO ----------------------
function getmovie() {
  // The name (aka value) of the movie that the user types into the search block will be stored in var movie
  movie = document.getElementById("movieInput").value;
  // Var movie will be updated as the user searches for other movies
  // queryURL = `https://www.omdbapi.com/?t=${movie}&apikey=8e35679c`;
  if (!(movie == undefined)) {
    localstor(movie);
  }

  x++;
  $("#display-movie-data").empty();

  getmovieInfo(movie);
  movieTrailer(movie);
}

function getmovieInfo(movieInput) {
  queryURL = `https://www.omdbapi.com/?t=${movieInput}&apikey=8e35679c`;
  // ajax request will get us the movie's title, year, poster, and plot.
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //console.log(response);
    title = response.Title;
    console.log(title);

    year = response.Year;
    console.log(year);

    poster = response.Poster;
    console.log(poster);

    plot = response.Plot;
    console.log(plot);

    render(title, year, poster, plot);
  });
}

function render(title, year, poster, plot) {
  // The movie's data will be appended to different elements and saved into var html
  var wrapper = document.createElement("div");
  wrapper.classList.add("col-sm-4");
  wrapper.classList.add("movie-col");
  var html = `<h3>${title}<br>${year}</h3> 
  <img src ="${poster}" style="width:200px;height:300px;"> 
  <p>${plot}</p>`;
  wrapper.innerHTML = html;

  // Var html will be displayed in the element with an id of display-movie-data. Line 103 of html.
  document.getElementById("display-movie-data").append(wrapper);
}

getmovieInfo(movie);

// When the user clicks on the playButton then,
$("#play-button").on("click", function () {
  // The Welcome page will hide
  $(".welcome-container").addClass("hide");
  // The movie search page will be displayed
  $("#main-page").removeClass("hide");
});

// ----------- GET MOVIE TRAILER -----------------------

function movieTrailer(movieInput) {
  var apiKey = "c7d300bef019d500e53ccb41d5680608";

  var trailerURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieInput}`;

  $.ajax({
    url: trailerURL,
    method: "GET",
  }).then(function (response) {
    //console.log(response);
    var movieId = response.results[0].id;
    //console.log(movieId);

    $.ajax({
      url: `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
      method: "GET",
    }).then(function (response) {
      //console.log(response);
      //console.log(response.results[0].key);
      var trailerKey = response.results[0].key;
      var movieTrailer = `https://www.youtube.com/watch?v=${trailerKey}`;
      console.log(movieTrailer);
    });
  });
}

// LocalStorage. When the page loads, the most recent search movies must be displayed

{
  //--------------------------- getmovieinfo2 function is for most recent searches only!!!!
  function getmovieInfo2(movieInput) {
    queryURL = `https://www.omdbapi.com/?t=${movieInput}&apikey=8e35679c`;
    // ajax request will get us the movie's title, year, poster, and plot.
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      //console.log(response);
      title = response.Title;
      console.log("2", title);

      year = response.Year;
      console.log("2", year);

      poster = response.Poster;
      console.log("2", poster);

      plot = response.Plot;
      console.log("2", plot);

      render2(title, year, poster, plot);
    });
  }

  function render2(title, year, poster, plot) {
    // The movie's data will be appended to different elements and saved into var html
    var wrapper = document.createElement("div");
    wrapper.classList.add("col-sm-4");
    wrapper.classList.add("movie-col");
    var html = `<h3>${title}<br>${year}</h3> 
    <img src ="${poster}" style="width:200px;height:300px;"> 
    <p>${plot}</p>`;
    wrapper.innerHTML = html;

    // Var html will be displayed in the element with an id of display-movie-data. Line 103 of html.
    document.getElementById("recents").append(wrapper);
  }

  getmovieInfo2(movie);

} //------------------------- Local Storage --------------------------------------

function localstor(input) {
  var res = [];
  if (!res.includes(input)) {
    html2 = "";
    input = input + ","; // store.push(input);
    localStorage.setItem("input", input);
    res = localStorage.getItem("input").split(",");
    console.log(res);
    for (var i = 0; i < res.length - 1; i++) {
      getmovieInfo2(res[i]);
    }
  }

  // console.log(html2);
  // document.getElementById("recents").innerHTML= html2;
  //
}
