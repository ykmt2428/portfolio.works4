$(function(){
    $('.hanbager').click(function(){
        if($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });
    $('#mask').click(function(){
        $('#header').removeClass('open');
    });
    $(".inview").on("inview", function (event, isInView) {
        if (isInView) {
          $(this).stop().addClass("show");
        }
    });
    $('a[href^="#"]').click(function(){
        var speed = 800,
            href = $(this).attr("href"),
            target = $(href === "#" || href === "" ? 'html' : href),
             position = target.offset().top;
         $("html, body").animate({scrollTop:position}, speed, "swing");
         return false;
});
});