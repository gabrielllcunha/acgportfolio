(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
  });

  // MENU
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // PARALLAX EFFECT
  $.stellar({
    horizontalScrolling: false,
  });

  // BACK TO TOP BUTTON
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".scroll-to-top-btn").fadeIn();
      } else {
        $(".scroll-to-top-btn").fadeOut();
      }
    });

    $(".scroll-to-top-btn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });

  // MAGNIFIC POPUP
  $(".image-popup").magnificPopup({
    type: "image",
    removalDelay: 300,
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function (openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });

  // SMOOTH SCROLL
  $(function () {
    $(".custom-navbar a, #home a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });
})(jQuery);
