$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}
//
//
//
//
//
// $(document).ready(function(){
//     $(".top-menu").changeActiveNav();
// });
//
// var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
//
// function onScroll(){
//     var scroll_top = $(document).scrollTop();
//     $(menu_selector + " a").each(function(){
//         var hash = $(this).attr("href");
//         var target = $(hash);
//         if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
//             $(menu_selector + " a.active").removeClass("active");
//             $(this).addClass("active");
//         } else {
//             $(this).removeClass("active");
//         }
//     });
// }
//
// $(document).ready(function () {
//
//     $(document).on("scroll", onScroll);
//
//     $("a[href^=#]").click(function(e){
//         e.preventDefault();
//
//         $(document).off("scroll");
//         $(menu_selector + " a.active").removeClass("active");
//         $(this).addClass("active");
//         var hash = $(this).attr("href");
//         var target = $(hash);
//
//         $("html, body").animate({
//             scrollTop: target.offset().top
//         }, 500, function(){
//             window.location.hash = hash;
//             $(document).on("scroll", onScroll);
//         });
//
//     });
//
// });