// $(".awsome").mousemove(function(){   // just for fun
//     $('.overlay').hide();
// });
// folio section ----------------------------------
$(function(){
    $('.first').click(function(){
        $('.onee').show();
        $('.twoe').hide();
    });

    $('.second').click(function(){
        $('.twoe').show();
        $('.onee').hide();
        
    });
    // Navbar scroll ----------------------------------
    $(document).scroll(function(){
        var scroll = $(this).scrollTop();
        if (scroll > 550){
            $('.header').slideDown();
        }
        else {
            $('.header').slideUp();  
        }  
    });
    // slide up down solution----------------------------

    $('.one').css('display','block');
    
    $('div.acordion h3').click(function(){
        
        $(this).next().slideToggle();
        $("div.acordion p").not($(this).next()).slideUp();
    });
    
    // Study Section Count to plug in 
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if (scroll > 1500){
            $('.timer').countTo();
            $(window).off('scroll');
        }
         
    });
    //----------------Scroll
     
    $("body").niceScroll({
        cursorcolor: "#e62739",
        cursorwidth: "7px",
    });
//--------- Filter
    var mixer = mixitup('.All_Images');
    mixer.filter('.');

 


})


