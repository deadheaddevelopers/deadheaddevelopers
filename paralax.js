$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var speed = 0.25;
        var bg = $("body");
        var pos = -(scroll * speed) + 'px';
        bg.css({'background-position': '0 '+ pos });
    });
});
