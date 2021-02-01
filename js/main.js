$(document).ready(function () {
  $(".js-preloader").preloadinator(),
    $(".js-preloader").preloadinator({ scroll: !1 }),
    $(".js-preloader").preloadinator({ minTime: 2e3 }),
    $(".js-preloader").preloadinator({
      animation: "fadeOut",
      animationDuration: 400,
    }),
    $(".js-preloader").preloadinator({
      afterEnableScroll: function () {},
      afterRemovePreloader: function () {},
    });
});

$(document).scroll(function (e) {

    // main function
    var scrollAmount = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
    var round = "<a href='https://www.jqueryscript.net/tags.php?/Scroll/'>Scroll</a>";
    round =  Math.round(scrollPercent);
    
    // horizontal scroll bar
    $(".scrollBar").css("width", scrollPercent + "%");
    $(".scrollBar span").text(roundScroll);
    
    // // vertical scroll bar
    // $(".scrollBar").css("height", scrollPercent + "%");
    // $(".scrollBar span").text(roundScroll);
    
  });
  

let bar = document.getElementById("menu"),
  mblMenu = document.getElementById("mblMenu");
function barChange(e) {
  let r = e.classList[1];
  "fa-bars" === r
    ? (bar.classList.remove(r),
      bar.classList.add("fa-times"),
      mblMenu.classList.add("showMblMenu"))
    : (bar.classList.remove(r),
      bar.classList.add("fa-bars"),
      mblMenu.classList.remove("showMblMenu"));
}
let btnArrow = document.querySelector(".btnArrow");
btnArrow.addEventListener("click", function () {
  window.scrollTo(0, 0);
}),
  window.addEventListener("scroll", function () {
    btnArrow.classList.toggle("showBtnArrow", window.scrollY > 50);
  });
