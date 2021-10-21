// $(document).ready(function(){
//     $('.next').on('click',function(){
//         var currentImg = $('.active');
//         var nextImg = currentImg.next();

//         if(nextImg.length){
//             currentImg.removeClass('active').css('z-index',-10);
//             nextImg.addClass('active').css('z-index',10)
//         }
//     });

//     $('.prev').on('click',function(){
//         var currentImg = $('.active');
//         var prevImg = currentImg.prev();

//         if(prevImg.length){
//             currentImg.removeClass('active').css('z-index',-10);
//             prevImg.addClass('active').css('z-index',10)
//         }
//     });

//     $("#slideshow > div:gt(0)").hide();

// });

setInterval(function() { 
    $('.sliders > img:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.sliders');
    }, 3000);
