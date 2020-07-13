$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
} );

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:5,
        loop:true,
        margin:5,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
});