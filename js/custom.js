$(function () {

    $(".toggle_bars").click(function () {
        $(".main_menu .navbar-nav").toggleClass("menu_active")
    });

    //    SLIDER JS HERE
    $('.slide_active').slick({
        arrows: true,
        nextArrow: ".btn_right",
        prevArrow: ".btn_left"
    });

    //    Work Gallery Mix Filter HERE
    var mixer = mixitup('.mix_wrap');

    //    VENOBOX POPUP HERE
    $('.ven').venobox();

    //    COUNTRER UP JS HERE
    $('.counter').counterUp({
        delay: 50,
        time: 10000
    });

    //    BRAND PART SLIDER

    $('.brand_active').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //NEWS SLIDER
    $('.news_active').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });


});
