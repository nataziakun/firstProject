$(document).ready(function(){
    $('.hamburger-menu').on('click', function(){
        $('body').addClass('menu-open');
    });

    $('.nav-close').on('click', function(){
        $('body').removeClass('menu-open');
    });
});


$(document).ready(function(){
    $('.sl-1').slick({
        dots: true,
        /*dots: '<span class="slick-dots"></span>',*/
        prevArrow: '<span class="slick-prev"></span>',
        nextArrow: '<span class="slick-next"></span>'
    });
  });