//-------------------------------------vArs----------------------
var Buttonfunction;
var int;
var movie = "titanic";
var title;
var year;
var poster;
var plot;
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=8e35679c";
var genre;

//-------------------------CLICK/UNCLICK----------------------------
var option = new Array(
    document.getElementById("#gnere1").addEventListener("click", one),
    document.getElementById("#gnere2").addEventListener("click", two),
    document.getElementById("#gnere3").addEventListener("click", three),
    document.getElementById("#gnere4").addEventListener("click", four),
    document.getElementById("#gnere5").addEventListener("click", five),
    document.getElementById("#gnere6").addEventListener("click", six)
    );
    var optionb = new Array(
        document.getElementById("#gnere1"),
        document.getElementById("#gnere2"),
        document.getElementById("#gnere3"),
        document.getElementById("#gnere4"),
        document.getElementById("#gnere5"),
        document.getElementById("#gnere6")
        );
function one(){
    optionb[1].checked = false;
    optionb[2].checked = false;
    optionb[3].checked = false;
    optionb[4].checked = false;
    optionb[5].checked = false;
    genre = 1;
    display();
}
function two(){
    optionb[0].checked = false;
    optionb[2].checked = false;
    optionb[3].checked = false;
    optionb[4].checked = false;
    optionb[5].checked = false;
    genre = 2;
    display();
}
function three(){
    optionb[1].checked = false;
    optionb[0].checked = false;
    optionb[3].checked = false;
    optionb[4].checked = false;
    optionb[5].checked = false;
    genre = 3;
    display();
}
function four(){
    optionb[1].checked = false;
    optionb[2].checked = false;
    optionb[0].checked = false;
    optionb[4].checked = false;
    optionb[5].checked = false;
    genre = 4;
    display();
}
function five(){
    optionb[1].checked = false;
    optionb[2].checked = false;
    optionb[3].checked = false;
    optionb[0].checked = false;
    optionb[5].checked = false;
    genre = 5;
    display();
}
function six(){
    optionb[1].checked = false;
    optionb[2].checked = false;
    optionb[3].checked = false;
    optionb[4].checked = false;
    optionb[0].checked = false;
    genre = 6;
    display();
}

//---------------------------------------DISPLAY MOVIES------------------------
function display(){
    if(genre === 6){
        //add and remove search option
        var html = '<input id="id-movieinput" type="text" placeholder="Search movie"/> <input id="id-searchBtn" type="button" value="search"/>';
        document.getElementById("id-searchdiv").innerHTML = html;
        Buttonfunction = document.getElementById("id-searchBtn").addEventListener("click", getmovie);
        console.log(genre);

        //other code eventually

    }
    if(genre === 5){
        //add and remove search option
        var html = '';
        document.getElementById("id-searchdiv").innerHTML = html;
        console.log(genre);

        //other code eventually
        
    }
    if(genre === 4){
            //add and remove search option
            var html = '';
            document.getElementById("id-searchdiv").innerHTML = html;
            console.log(genre);
    
            //other code eventually
            
    }
    if(genre === 3){
             //add and remove search option
             var html = '';
             document.getElementById("id-searchdiv").innerHTML = html;
             console.log(genre);
     
             //other code eventually
                
    }
    if(genre === 2){
             //add and remove search option
             var html = '';
             document.getElementById("id-searchdiv").innerHTML = html;
             console.log(genre);
     
             //other code eventually
                
    }
    if(genre === 1){
              //add and remove search option
              var html = '';
              document.getElementById("id-searchdiv").innerHTML = html;
              console.log(genre);
      
              //other code eventually
               
    }
}





//-----------------GET MOVIE INFO----------------------
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
    var html = '<h3>' + title + '<br> ' + year + '</h3> <p><br> <img src = "'+ poster + '" style = "width:200px;height:300px;"><br>' + plot + '</p>'
    document.getElementById("id-movieName").innerHTML = html;
}
getmovieinfo();


