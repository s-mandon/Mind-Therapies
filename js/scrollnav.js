$(window).scroll(function() {
    if($(this).scrollTop() > 100) {
        $('.navbar-fixed-top').addClass('opaque');
    } else {
        $('.navbar-fixed-top').removeClass('opaque');
    }
});

$(window).scroll(function() {
    if($(this).scrollTop() > 100) {
        $('.mobmenu').addClass('opaque');
    } else {
        $('.mobmenu').removeClass('opaque');
    }
});