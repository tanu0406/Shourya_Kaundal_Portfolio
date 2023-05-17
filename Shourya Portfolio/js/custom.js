$(function(){

    /*=========================================================================
     Parallax layers
     =========================================================================*/
     if ($('.parallax').length > 0) { 
      var scene = $('.parallax').get(0);
      var parallax = new Parallax(scene, { 
        relativeInput: true,
      });
    }

     /*=========================================================================
     Text Rotating
     =========================================================================*/
    $(".text-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 4000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    /*=========================================================================
     Counterup JS for facts
     =========================================================================*/
    $('.count').counterUp({
      delay: 10,
      time: 2000
    });

    /*=========================================================================
     Progress bar animation with Waypoint JS
     =========================================================================*/
     
     $('.progress-bar').each(function() {
        var bar_value = $(this).attr('aria-valuenow') + '%';                
        $(this).animate({ width: bar_value }, { easing: 'linear' });
      });

    /*=========================================================================
            Scroll to Top
    =========================================================================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 350) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').on('click', function(event) {     // When arrow is clicked
      event.preventDefault();
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 400);
    });

});