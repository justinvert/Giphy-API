function emptyDIV(){
    $("#sortedGIFS").empty();
   }

     var topics = ["Kenny Omega", "Chris Jericho", "Daniel Bryan"];
//API KEY GOES HERE
   var API = "";
   function displayTopics() {
  var topicData = $(this).attr("topic-data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicData + "&rating=pg-13&api_key=" + API + "&limit=10";
  

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response){
        var results = response.data;
        console.log(response); 
        emptyDIV();
        for (var i = 0; i < results.length; i++) {
            var ratingDiv = $("<div>");
            
            var p = $("<p>").text("Rated " + results[i].rating);
            var gifIMG =$("<img>")
            gifIMG.attr('src', results[i].images.fixed_height.url);
            gifIMG.attr("data-still", results[i].images.fixed_height_still.url);
            gifIMG.attr("data-animate", results[i].images.fixed_height.url);
            gifIMG.attr("data-state", "still");
            gifIMG.addClass('pause');
            gifIMG.addClass('test');
            // (p).appendTo(ratingDiv);
            // (gifIMG).appendTo(ratingDiv);
            // $("#sortedGIFS").append(ratingDiv);
            (ratingDiv).append(p);
            (ratingDiv).append(gifIMG);
            $("#sortedGIFS").prepend(ratingDiv);
        }
        pauseGIF();
        
    });
   
   }; 
   
   function topicButtons() {
    $("#topics-list").empty();
 for (var i = 0; i < topics.length; i++) {
    //   $("#new").append(topics[i]);
    var topicNames = $("<button>");
  topicNames.addClass("topic-class");
  topicNames.attr("topic-data", topics[i]);
  topicNames.text(topics[i]);
  $("#topics-list").append(topicNames);
}};  

function pauseGIF(){
   $(".pause").on("click", function() {
      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
}

   $("#add-topic").on("click", function(event) {
        event.preventDefault();
        var topicAdd = $("#topic-input").val();
        topics.push(topicAdd);
        $("#topic-input").val(" ");
        topicButtons();
      });
    
   
   
   $(document).on("click", ".topic-class", displayTopics);   
topicButtons(); 