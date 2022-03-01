$(document).ready(function() {

  // const animItems = document.querySelectorAll('.animate');

  // if(animItems.length > 0){
  //   function animOnScroll(params){
  //     for(let index = 0; index < animItems.length; index++){
  //       const animItem = animItems[index];
  //     }
  //   }
  // }

  // if ( window.innerWidth>0 ) {
	// 	$('.main_section').toggleClass("hidden");
	// 	//$('#header').addClass('animated');
	// }; 
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.5 ) ) {
		    $(this).addClass('animated');
		}
	    });
	});

       // языки
	$('.language').click(function(){
        if ($('.language').hasClass("show")) {
            $('.language').removeClass('show');
        }else{
            $('.language').addClass('show');
        }
    });

        $('.menu_btn').click(function(){
            if($('.menu_btn').hasClass('active')){
                $('.menu_btn').removeClass('active');
                $('.navigation').removeClass('slid_active');
            }else{
                $('.menu_btn').addClass('active');
                $('.navigation').addClass('slid_active');
            }
        });

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

      $('.our_partners_slider').slick({
        // centerMode: true,
        arrows: true,
        slidesToShow: 4,
      });

      $(window).on('load resize', function() {
        if ($(window).width() < 967) {
          $('.category').slick({
            // centerMode: true,
            arrows: true,
            slidesToShow: 3,
            responsive: [
              {
                breakpoint: 355,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              }
            ]
          });
        } else {
          $('.category').slick('unslick');
        }
    });
});
