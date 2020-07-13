$(document).ready(function() {
    $('.search-box').hide()

    checkOnScreen()

    // MILESTONES
    $(window).scroll(function() {

      checkOnScreen()
        
    });
})

const checkOnScreen = () => {
  $(".count").each(function() {
    if ($(this).isOnScreen()) {
      startCounter($(this));
    }
});
}


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
  
  function startCounter(counterElement) {
    console.log('start counting')
      counterElement.prop('Counter', 0).animate({
        Counter: counterElement.attr("counter-lim")
      }, {
        duration: 2000,
        step: function(now) {
          counterElement.text(Math.ceil(now).toLocaleString());
        }
      });
  }

