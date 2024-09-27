
  (function ($) {
  
  "use strict";

  // NAVBAR
  $('.navbar-nav .nav-link').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  // PROJECTS IMAGE RESIZE
    function NewsImageResize(){      
      var LargeImage = $('.projects-thumb-small .projects-image').height();

      $('.projects-thumb-large').css('height', LargeImage + 'px');
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);



  document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
  
    productCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = getAutumnColor();
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#FFFFFF';
      });
    });
  
    function getAutumnColor() {
      const autumnColors = ['#FFA07A', '#FFD700', '#FF6347', '#DEB887', '#D2691E'];
      return autumnColors[Math.floor(Math.random() * autumnColors.length)];
    }
  });
