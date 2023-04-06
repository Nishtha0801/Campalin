$("#clickMe").click(function() {
    console.log("Button is clicked");
    $(".modal").css({
        'display':'flex',
    });
    $("#clickMe").text("Close the modal");

});