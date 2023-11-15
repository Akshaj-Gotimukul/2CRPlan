

$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

$(document).ready(function(){

    var sticky = $('header'),
    scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

    $('.main_slider').each(function() {
        var carouselId = $(this).attr('id');
        $('#' + carouselId).owlCarousel({
            items: 1,
            merge: true,
            loop: false,
            video: true,
            lazyLoad: true,
            nav: false,
            dots: true
        });
    });

    $('#testimonials_carousel').owlCarousel({
        items: 1,
        merge: true,
        loop: false,
        video: true,
        lazyLoad: true,
        nav: false,
        dots: true
    });

 $('#about_page_testimonials').owlCarousel({
        items: 3,
        merge: true,
        loop: false,
        video: true,
        lazyLoad: true,
        nav: false,
        dots: true,
        margin: 45,
        responsive: {
            0: {
                items: 1,
                dots: true
              
            },
            600: {
                items: 2,
                dots: true
                
            },
            1000: {
                items: 3,
                dots: true
                
            }
        }
    });
    

    var eventFired = 0;

	if ($(window).width() < 1199) {	
        $('.navigation .nav-link[data-bs-target]').attr('data-bs-toggle', 'collapse');		
		
        //alert('add');
	} else {
		$('.navigation .nav-link[data-bs-target]').removeAttr('data-bs-toggle');
        //alert('del')
	}

    $(window).on('resize', function() {
		if (!eventFired) {
			if ($(window).width() < 1199) {

				$('.navigation .nav-link[data-bs-target]').attr('data-bs-toggle', 'collapse');	
                //alert('add');

	            } else {

                
                $('.navigation .nav-link[data-bs-target]').removeAttr('data-bs-toggle');	
                //alert('del');
			}
		}
	});


    $(".toggle_liks a").each(function() {
        $(this).on('click touchstart', function() {
            var targetplace = $(this).attr('href');
            //$(targetplace + ".active .page-leftPane .nav-item:first-child").addClass('active');
            var top = ($(targetplace).offset() || { "top": NaN }).top - 90;
            $('html, body').animate({
                scrollTop: top
            }, 100);
        });
    });
    
    
      $('.btn-moreLess').click(function(){
         $(this).parents('.owl-item').siblings().find('.testimonials').removeClass('show');
        $(this).parents('.testimonials').toggleClass('show');     
   
      });    

});


  

AOS.init({
    //easing: 'ease-out-back',
    duration: 1500,
    disable: function() {
        var maxWidth = 991;
        return window.innerWidth < maxWidth;
    }
});

