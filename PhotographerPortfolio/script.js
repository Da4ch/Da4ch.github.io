$(window).load(function() {
    $("body").removeClass("load");
});

$("img, a").on("dragstart", function(event) { event.preventDefault(); });