//scenario:
//hauteur de screen de chaque element : .offset().top;
//hauteur scroller par rapport du top-screen: element parait.scrollTop()

//let stickyNav=$(window).offset().top;
//console.log(stickyNav);
//let bottom = window.scrollBottom();
//console.log(bottom);

let aParraitres =$(".revealable");   //tout


aParraitres.each(function (i,parait)  {  //un par un
    let hauteur=$(parait).offset().top; //hauteur de chaque element parait
    
    $(window).scroll(function(){         //sur window, 'scrol' à chaque scroll on fait la fonction
        let scrollTop=$(window).scrollTop();  // scroll par rapport du scrollTop
        if (scrollTop + $(window).height() > hauteur) {
            $(parait).addClass("revealed");
        } else {
            $(parait).removeClass("revealed");
        }
        
    });
    $(parait).addClass("revealed");   
});

//___solution :---------------------------
// function apparait() {
// $(".revealable").each(function(){
//     var a = $(this).offset().top,
//     o = $(window).scrollTop();
//     o + (windowHeight - 100) > = a && $(this).addClass("revealed")
// })
// }
// var windowHeight = $(window)...suite
//

