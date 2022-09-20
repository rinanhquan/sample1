$(document).ready(function(){

    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

    $('.site-main #artwork-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 2000, //2000ms = 2s;
        
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    })

    //sticky nav bar
    let nav_offset_top = $('#header_area').height()+300;

    function navbarFixed(){
        if($('#header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('#header_area .main-menu').addClass('navbar_fixed');
                }
                else {
                    $('#header_area .main-menu').removeClass('navbar_fixed');

                }
            })
        }
    }

    navbarFixed();

    
    
});

