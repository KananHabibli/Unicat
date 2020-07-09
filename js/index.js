$(document).ready(function() {
    $('.search-box').hide()

    // MILESTONES
     // Add event on document scroll
    $(window).scroll(function() {

        // Cycle through each counter
        $(".count").each(function() {

            // Check if counter is visible
            if ($(this).isOnScreen()) {

            // Start counter
            startCounter($(this));

            }
        });
    });
})


const searchButton = $('.search-button')
searchButton.click(function(){
    $('.search-box').slideToggle( "fast" )

})

$('.sidebar-open').click(function(){
    $('.sidebar-menu').css('right', '0')
})

$('.sidebar-close').click(function(){
    $('.sidebar-menu').css('right', '-400px')
})


const header = $('header');

const scrollHeader = () => {
    if($(window).scrollTop() > 100){
        header.addClass('scrolled');
    } else {
        header.removeClass('scrolled');
    }
}

$(window).on('resize', function()
{
    scrollHeader();
});

$(document).on('scroll', function()
{
    scrollHeader();
});

var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}


// MILESTONES 
  
  // Check if an element is on screen
  // Thanks to Adjit - taken from the url below
  // Reference : https://stackoverflow.com/questions/23222131/jquery-fire-action-when-element-is-in-view#answer-23222523
  $.fn.isOnScreen = function() {
  
    var win = $(window);
  
    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
  
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
  
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
  
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
  
  
  };
  
  
  //Run counter, separate function so we can call it from multiple places
  function startCounter(counterElement) {
  
    // Check if it has only just become visible on this scroll
    // if (counterElement.hasClass("notVisible")) {
  
      // Remove notVisible class
    //   counterElement.removeClass("notVisible");
    console.log('start counting')
  
      // Run your counter animation
      counterElement.prop('Counter', 0).animate({
        Counter: counterElement.attr("counter-lim")
      }, {
        duration: 2000,
        step: function(now) {
          counterElement.text(Math.ceil(now).toLocaleString());
        }
      });
    // }
  }