$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoWidth:false,
        mouseDrag: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
    
    $(".hov").on('click', function(){
        if ($('.search-bar').hasClass('hide-me')){
            $(".search-bar").removeClass("hide-me");
            $(".search-bar").addClass("show-me");
        }
        else{
            $('.search-bar').removeClass('show-me');
            $(".search-bar").addClass("hide-me");
        }
        
    });
    $(".time-sty").on('click', function(){
        $('.search-bar').removeClass('show-me');
        $(".search-bar").addClass("hide-me");
    });
})
