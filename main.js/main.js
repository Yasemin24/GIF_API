//API_KEY

var APIKEY = "B4b5ItUqAQ0kMOkWk6ao4TnKt0unXwYT";

var seasons = ["winter,summer,autumn,spring"];

var seasonDiv = $("<div class='season'>");

var results = response.data;

//Under pg-13

    for (var i = 0; i < results.length; i++) {

           if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          
            
          };

var gifDiv = $("<div>");

var rating = results[i].rating;

var p = $("<p>").text("Rating: " + rating);



gifDiv.append(p);


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  })


   //Pauses gif, change src:

   $(".gif").on("click", function() {
    

    var state = $(this).attr("data-state");
  
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }



    