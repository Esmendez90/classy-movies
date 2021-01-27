var Buttonfunction = document.getElementById("id-searchBtn").addEventListener("click", getmovie);
var movie = "titanic";
var title;
var year;
var poster;
var plot;
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=8e35679c"
//http://www.omdbapi.com/?i=tt3896198&apikey=8e35679c

function getmovie(){
    movie = document.getElementById("id-movieinput").value;
    queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=8e35679c"
    getmovieinfo();
}


function getmovieinfo(){
    $.ajax({
        type: "GET", 
        url: queryURL,
        dataType: "json",
        success: function(data){
            console.log(data);

            console.log(data.Title);
            title = data.Title;
            console.log(data.Year);
            year = data.Year;
            console.log(data.Poster);
            poster = data.Poster;
            console.log(data.Plot);
            plot = data.Plot;
            htmledit();
        }
    });
    }
function htmledit(){
    var html = '<p1> ' + title + '<br> ' + year + '<br> <img src = "'+ poster + '" style = "width:200px;height:300px;"><br>' + plot + '</p1>'
    document.getElementById("id-movieName").innerHTML = html;
}
getmovieinfo();