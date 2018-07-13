# Giphy-API

Giphy API Page

 <a href="https://justinvert.github.io/Giphy-API/">Live Version</a>
 </br>

The main purpose of this page is to allow users to grab images from Giphy's API through an AJAX call. After all that data is recieved from the promise, is is displayed through newly created divs, with attributes for each. This small piece of the coding below shows just that, how the div, p and img tag are created and attributes are added as it progresses.
```
  for (var i = 0; i < results.length; i++) {
            var ratingDiv = $("<div>");
            
            var p = $("<p>").text("Rated " + results[i].rating);
            var gifIMG =$("<img>")
            gifIMG.attr('src', results[i].images.fixed_height.url);
            gifIMG.attr("data-still", results[i].images.fixed_height_still.url);
            gifIMG.attr("data-animate", results[i].images.fixed_height.url);
            gifIMG.addClass('pause');
            (ratingDiv).append(p);
            (ratingDiv).append(gifIMG);
            $("#sortedGIFS").prepend(ratingDiv);
    
```
One of the challenges presented with this code was having to find a way to stop the gifs from playing. To do this, it focuses on an <a href="http://api.jquery.com/on/">.on() method</a>, which attaches a click event that allows the gif to be paused. In doing this, it changes the data-state to 'still' to stop and 'animate' to begin again.

```
function pauseGIF(){
   $(".pause").on("click", function() {
      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
      }
    });
}
```

<img src="assets/images/topics.png">

To add a search term, enter your topic into the box and click submit.

<img src="assets/images/new-topic.png">

Once submit it clicked, a new button will appear above it with the topic's name.</br>
Once that topic is clicked, 10 gifs from Giphy's directory will be displayed on the screen.

<img src="assets/images/topic-button.png">

