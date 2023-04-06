$("p").css("color", "blue");

$("p").addClass("selected");

$(".content").css("color", "green");

$("ul.list").append("<li> first, I am the first item </li>");

$("#list-item").replaceWith("<p>I am the replaced paragraph.</p>")

$("#heading").css("color", "blue");

// $(".text").html('Hello world!');
$(".text").text('Hello world!');

$(".text").css({
    'background': 'green',
    'color': 'white',
});

$("#clickMe").click(function(){
    alert("Heyy, button is clicked!");
});