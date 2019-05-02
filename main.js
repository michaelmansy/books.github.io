// STICKY NAVBAR

let navbar = $(".navbar");

$(window).scroll(function () {
    // console.log(window.innerHeight);
    // console.log($("#section-2").offset().top);

    let oTop = $("#section-1").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});