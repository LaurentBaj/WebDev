/*
Changing text color on h1
$("h1").css("color", "red");
*/  

$("h1").addClass("title margin-50"); 

// The dollar sign is both querySelector and querySelectorAll
$("button").text("Click me"); 
$("button").html("<b>Click me</b>"); 

// Giving the link text, attribute + link to website
$("a").html("Youtube"); 
$("a").attr("href", "https://www.youtube.com/");
console.log($("a").attr("href"));

// eventListener 
$("h1").click(function(){
    $("h1").css("color", "purple"); 
});

/*
for(let i = 0; i <input $("button").length; i++){
    $("button")[i].addEventListener("click", function() {
        $("h1").css("color", "pink");
    });
}
*/ 

$("button").click(function() {
    $("h1").css("color", "pink");
}); 

// Change a DOM-element using click or keypress method 
$(document).keypress(function(event) {
    $("h1").text(event.key);  
}); 

// Creating DOM-elements by adding it above, below or inside another element
$("h1").before("<input type='text'>"); 
$("h1").after("<input type='checkbox'>"); 
$("h1").prepend("<input type='checkbox'>"); 
$("h1").append("<input type='checkbox'>"); 

// Animations - these methods can be changed 
$("button").on("click", function(){
    // $("h1").hide() - hides the h1
    // $("h1").show() - shows the h1 
    // $("h1").toggle() - switches between appearing and disappearing   
    // $("h1").fadeIn() - fades in   
    // $("h1").fadeOut() - fades out 
    // $("h1").fadeToggle() - switchees between fading in and out  
    // $("h1").slideUp() - slide up
    // $("h1").slideDown() - slide down
    // $("h1").slideToggle() - switches between sliding up and down 
    // $("h1").animate({opacity: 0.5}) - animate towards  
});







 