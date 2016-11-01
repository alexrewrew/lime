$(document).ready(function () {
    $(".arrow_link, .for_arrow").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
    $('#day_switch').click(function () {
        $('#night_image').css('display','block');
        $('body').addClass('night_page');
        $('body').removeClass('day_page');
        $('#day_image').hide();
        $('#day_arrow').hide();
        $('#night_arrow').show();
        $('#first_p').css('visibility', 'hidden');
        $('.slider_section').hide();
        $('.mail_section').show();
        $('#nowornever').hide();
        $('#contactus').fadeIn();
    });
    $('#night_switch').click(function () {
        $('#night_image').css('display','none');
        $('#day_image').fadeIn();
        $('body').removeClass('night_page');
        $('body').addClass('day_page');
        $('#night_arrow').hide();
        $('#day_arrow').show();
        $('#first_p').css('visibility', 'visible');
        $('.slider_section').show();
        $('.mail_section').hide();
        $('#nowornever').fadeIn();
        $('#contactus').hide();
    });
    $('#mailinput').focus(function () {
        $('hr').addClass('glow');
    });
    $('#mailinput').focusout(function () {
        $('hr').removeClass('glow');
    });
    /* OWL CAROUSEL */
    $('#carousel_brand').owlCarousel({
        loop: true
        , margin: 100
        , nav: false
        , items: 5
        , autoplay: true
        , autoplayTimeout: 3500
        , autoplayHoverPause: false
        , autoWidth: true
        , responsive: {
            0: {
                items: 1
                , autoWidth: false
                , center: true
            }
            , 768: {
                items: 5
                , autoWidth: true
            }
            , 1024: {
                items: 5
                , autoWidth: true
            }
        }
    });
})