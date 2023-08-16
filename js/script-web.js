$(window).on("scroll", function () {
  var e, a;
  (e = $(".top-bar").outerHeight()),
    (a = $(".header .site-navigation")),
    $(window).scrollTop() > e
      ? ($(a).addClass("navbar-fixed"),
        $(".header").css("margin-bottom", a.outerHeight()))
      : ($(a).removeClass("navbar-fixed"),
        $(".header").css("margin-bottom", 0));
}),
  window.addEventListener("DOMContentLoaded", (e) => {
    function a() {
      $(document).on("click", "#send-it", function () {
        if ("" != document.getElementById("chat-input").value) {
          var e = $("#get-number").text(),
            a = document.getElementById("chat-input").value,
            t = "https://web.whatsapp.com/send";
          if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )
          )
            var t = "whatsapp://send";
          var s = t + "?phone=" + e + "&text=" + a;
          window.open(s, "_blank");
        }
      }),
        $(document).on("click", ".informasi", function () {
          (document.getElementById("get-number").innerHTML = $(this)
            .children(".my-number")
            .text()),
            $(".start-chat,.get-new").addClass("show").removeClass("hide"),
            $(".home-chat,.head-home").addClass("hide").removeClass("show"),
            (document.getElementById("get-nama").innerHTML = $(this)
              .children(".info-chat")
              .children(".chat-nama")
              .text()),
            (document.getElementById("get-label").innerHTML = $(this)
              .children(".info-chat")
              .children(".chat-label")
              .text());
        }),
        $(document).on("click", ".close-chat", function () {
          $("#whatsapp-chat").addClass("hide").removeClass("show");
        }),
        $(document).on("click", ".blantershow-chat", function () {
          $("#whatsapp-chat").addClass("show").removeClass("hide");
        });
    }
    function t() {
      if (992 > $(window).width()) {
        $(".site-navigation .dropdown-toggle").on("click", function () {
          $(this).siblings(".dropdown-menu").animate({ height: "toggle" }, 300);
        });
        var e = $(".site-navigation").outerHeight();
        $(".site-navigation .navbar-collapse").css(
          "max-height",
          "calc(100vh - " + e + "px)"
        );
      }
    }
    function s() {
      $(".banner-carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        dots: !0,
        speed: 600,
        arrows: !0,
        prevArrow:
          '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
      }),
        $(".banner-carousel.banner-carousel").slickAnimation();
    }
    function o() {
      $(".page-slider").slick({
        fade: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        dots: !1,
        speed: 600,
        arrows: !0,
        prevArrow:
          '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
      });
    }
    function n() {
      if (0 !== $(".shuffle-wrapper").length) {
        var e = new window.Shuffle(document.querySelector(".shuffle-wrapper"), {
          itemSelector: ".shuffle-item",
          sizer: ".shuffle-sizer",
          buffer: 1,
        });
        $('input[name="shuffle-filter"]').on("change", function (a) {
          var t = a.currentTarget;
          t.checked && e.filter(t.value);
        }),
          $(".shuffle-btn-group label").on("click", function () {
            $(".shuffle-btn-group label").removeClass("active"),
              $(this).addClass("active");
          });
      }
    }
    function i() {
      $(".testimonial-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !0,
        speed: 600,
        arrows: !1,
      });
    }
    function l() {
      $(".client-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !1,
        speed: 600,
        arrows: !1,
        fade: !0,
        cssEase: "linear",
        autoplay: !0,
        autoplaySpeed: 2e3,
      });
    }
    a(), t(), s(), o(), n(), i(), l();
  }),
  window.addEventListener("DOMContentLoaded", (e) => {
    $(".sidebar-dropdown-menu").slideUp("fast"),
      $(
        ".sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a"
      ).click(function (e) {
        e.preventDefault(),
          $(this).parent().hasClass("focused") ||
            ($(this)
              .parent()
              .parent()
              .find(".sidebar-dropdown-menu")
              .slideUp("fast"),
            $(this)
              .parent()
              .parent()
              .find(".has-dropdown")
              .removeClass("focused")),
          $(this).next().slideToggle("fast"),
          $(this).parent().toggleClass("focused");
      }),
      $(".sidebar-toggle").click(function () {
        $(".sidebar").toggleClass("collapsed"),
          $(".sidebar.collapsed").mouseleave(function () {
            $(".sidebar-dropdown-menu").slideUp("fast"),
              $(
                ".sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown"
              ).removeClass("focused");
          });
      }),
      $(".sidebar-overlay").click(function () {
        $(".sidebar").addClass("collapsed"),
          $(".sidebar-dropdown-menu").slideUp("fast"),
          $(
            ".sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown"
          ).removeClass("focused");
      }),
      window.innerWidth < 768 && $(".sidebar").addClass("collapsed");
  });
