$(document).ready(function(){
    $('.nav .item').on('click', function(){
        $(this).find('.sub-nav').slideToggle(300);
    });

    $('...').on('click', function(){
        $('.nav').toggleClass('active');
        $('body').toggleClass('scrollOff');
    });

});