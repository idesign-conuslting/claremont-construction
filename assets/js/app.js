/*       Sidebar Menu
-------------------------*/
function openNav(el) {
  var menu = document.querySelector(".sidebar");
  var btnMenu = document.querySelector(".openbtn");
  var x = document.querySelector(".sidebar__menu");
  var _body = document.querySelector("body");
  if (x.style.display === "none") {
    x.style.display = "block";
    menu.classList.add("open-menu");
    _body.classList.add("menu-opened");
  } else {
    x.style.display = "none";
    menu.classList.remove("open-menu");
    _body.classList.remove("menu-opened");
  }
  var el_id= el.getAttribute("data-id");
  if(el_id){
    $("html, body").animate({
      scrollTop: $(el_id).position().top,
    });
  }
}

//JQuery Module Pattern

var app = {
  init: function () {
    app.customScrollBar();
    app.scrollTop();
    app.scrollParticularBlock();
    app.singleGallerySlider();
  },

  customScrollBar: function () {
    $(".sidebar-inner").scrollbar();
  },

  scrollTop: function () {
    $(".scroll-top").click(function () {
      $("html, body").stop().animate({ scrollTop: 0 }, 1000, "swing");
    });
  },

  scrollParticularBlock: function () {
    $("[data-target]").on("click", function () {
      var targetElement = $(this).attr("data-target");
      if (targetElement) {
        $("html, body").animate({
          scrollTop: $("#" + targetElement).position().top,
        });
      }
    });
  },

  setNavigation: function () {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);
    $(".sidebar__menu a, .footer__menu a").each(function () {
      var href = $(this).attr("href");
      if (path.substring(1, href.length + 1) === href) {
        $(this).addClass("active");
      }
    });
  },

  singleGallerySlider: function () {
    if ($("#uc-claremont-slider").length > 0) {
      var sliderGallery = $("#uc-claremont-slider");
      // if($(window).width() > 767){
      //   sliderGallery.slick({
      //     dots: false,
      //     arrows: true,
      //     infinite: false,
      //     speed: 300,
      //     slidesPerRow: 2,
      //     rows: 2,
      //     prevArrow:
      //       '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="assets/img/previous_button.png" alt=""/></button>',
      //     nextArrow:
      //       '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="assets/img/next_button.png" alt=""/></button>',
      //   });
      // }else{
        sliderGallery.slick({
          dots: false,
          arrows: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '120px',
          prevArrow:
            '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="assets/img/previous_button.svg" alt=""/></button>',
          nextArrow:
            '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="assets/img/next_button.svg" alt=""/></button>',
          responsive: [
            {
              breakpoint: 992,
              settings: {
                centerMode: true,
                centerPadding: '80px',
              },
            },
            {
              breakpoint: 768,
              settings: {
                centerMode: false,
                centerPadding: '0px',
              },
            },
          ],
        });
      // }
    }
  },
};
$("document").ready(function () {
  app.init();
});
