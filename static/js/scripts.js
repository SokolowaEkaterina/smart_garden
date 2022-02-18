$(document).ready(function() {
       // языки
	$('.language').click(function(){
        if ($('.language').hasClass("show")) {
            $('.language').removeClass('show');
        }else{
            $('.language').addClass('show');
        }
    });

    if ( /*window.innerWidth > 600 &*/ window.innerWidth < 840 ) {
        $('.menu_btn').click(function(){
            if($('.menu_btn').hasClass('active')){
                $('.menu_btn').removeClass('active');
                $('.navigation').removeClass('slid_active');
            }else{
                $('.menu_btn').addClass('active');
                $('.navigation').addClass('slid_active');
            }
        });
    };

    $(window).on('load resize', function() {
        if ($(window).width() < 691) {
          $('.services_block').slick({
            centerMode: true,
            arrows: false,
            slidesToShow: 1,
          });
        } else {
          $('.services_block').slick('unslick');
        }
      });
});
