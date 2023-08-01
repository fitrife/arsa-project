// banner-carousel
function bannerCarousel() {
  $(".banner-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 600,
    arrows: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow:
      '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
  });
  $(".banner-carousel.banner-carousel").slickAnimation();
}
bannerCarousel();

// pageSlider
function pageSlider() {
  $(".page-slider").slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    speed: 600,
    arrows: true,
    prevArrow:
      '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
  });
}
pageSlider();

$(window).scroll(function () {
  if ($("header").offset().top > 10) {
    $(".top-header").addClass("hide");
    $(".site-navigation").addClass("nav-bg");
  } else {
    $(".top-header").removeClass("hide");
    $(".site-navigation").removeClass("nav-bg");
  }
});

$("[data-background]").each(function () {
  $(this).css({
    "background-image": "url(" + $(this).data("background") + ")",
  });
});

//Hero Slider
$(document).ready(function () {
  $(".hero-slider").slick({
    autoplay: true,
    autoplaySpeed: 7500,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    arrows: true,
    fade: true,
    dots: true,
  });
  $(".hero-slider").slickAnimation();

  $(window).on("scroll", function () {
    counter();
  });
});

// mobile_menu
var menu = $("ul#navigation");
if (menu.length) {
  menu.slicknav({
    prependTo: ".mobile_menu",
    closedSymbol: "+",
    openedSymbol: "-",
  });
}

/* 3. MainSlider-1 */
// h1-hero-active
function mainSlider() {
  var BasicSlider = $(".slider-active");
  BasicSlider.on("init", function (e, slick) {
    var $firstAnimatingElements = $(".single-slider:first-child").find(
      "[data-animation]"
    );
    doAnimations($firstAnimatingElements);
  });
  BasicSlider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
    var $animatingElements = $(
      '.single-slider[data-slick-index="' + nextSlide + '"]'
    ).find("[data-animation]");
    doAnimations($animatingElements);
  });
  BasicSlider.slick({
    autoplay: false,
    autoplaySpeed: 4000,
    dots: false,
    fade: true,
    arrows: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/hero_thumb/arrow-left.png" alt=""><img class="secondary-img" src="img/hero_thumb/left-white.png" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/hero_thumb/arrow-right.png" alt=""><img class="secondary-img" src="img/hero_thumb/right-white.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  function doAnimations(elements) {
    var animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data("delay");
      var $animationType = "animated " + $this.data("animation");
      $this.css({
        "animation-delay": $animationDelay,
        "-webkit-animation-delay": $animationDelay,
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }
}
mainSlider();
/* ----------------------------
        nevbar shrink
    ------------------------------- */
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".header").addClass("navbar-shrink");
    } else {
      $(".header").removeClass("navbar-shrink");
    }
  });
});
/* ----------------------------
      course preview video
  ------------------------------- */
function coursePreviewVideo() {
  const coursePreviewVideo = document.querySelector(".js-course-preview-modal");
  if (coursePreviewVideo) {
    // if element exist
    coursePreviewVideo.addEventListener("shown.bs.modal", function () {
      this.querySelector(".js-course-preview-video").play();
      this.querySelector(".js-course-preview-video").currentTime = 0;
    });

    coursePreviewVideo.addEventListener("hide.bs.modal", function () {
      this.querySelector(".js-course-preview-video").pause();
    });
  }
}
coursePreviewVideo();
/* ----------------------------
      Reason Accordion 
  ------------------------------- */
// function accordionReason() {
//   const triggerTabList = document.querySelectorAll(
//     "#accordionReason .accordion-item"
//   );
//   triggerTabList.forEach((triggerEl) => {
//     const tabTrigger = new bootstrap.Tab(triggerEl);

//     triggerEl.addEventListener("click", (event) => {
//       event.preventDefault();
//       tabTrigger.show();
//     });
//   });

//   const triggerReasonOne = document.querySelector(
//     '#accordionReason .accordion-item[data-bs-target="#reason-one"]'
//   );
//   bootstrap.Tab.getInstance(triggerReasonOne).show(); // Select tab by name
// }
// accordionReason();

/* ----------------------------
      Exclusive carousel
  ------------------------------- */
function exclusiveCarousel() {
  $(".exclusive-carousel").owlCarousel({
    margin: 0,
    dots: false,
    nav: true,
    stagePadding: 25,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        //   nav: true,
      },
      600: {
        items: 2,
        //   nav: true,
      },
      992: {
        items: 1,
        //   nav: true,
      },
    },
  });
}
exclusiveCarousel();
/* ----------------------------
      Course Text carousel
  ------------------------------- */
function courseTextTab() {
  document.querySelectorAll('button[data-bs-toggle="tab"]').forEach((t, i) => {
    t.addEventListener("show.bs.tab", function (e) {
      let targetClass = t.dataset.bsTarget;
      var pane = document.querySelector("#courseText " + targetClass);
      var sibling = document.querySelector("#courseText .nav-link.active");
      // hide 2nd pane sibling
      sibling.classList.remove("show");
      sibling.classList.remove("active");
      // show 2nd pane
      pane.classList.add("show");
      pane.classList.add("active");
    });
  });
}
courseTextTab();
/* ----------------------------
      Carousel carousel
  ------------------------------- */
$(".course-carousel").owlCarousel({
  margin: 0,
  dots: true,
  nav: false,
  stagePadding: 25,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      //   nav: true,
    },
    600: {
      items: 2,
      //   nav: true,
    },
    1000: {
      items: 2,
      //   nav: true,
    },
  },
});

/* ----------------------------
      Schedule carousel
  ------------------------------- */
$(".schedule-carousel").owlCarousel({
  margin: 0,
  dots: true,
  nav: false,
  stagePadding: 25,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      //   nav: true,
    },
    600: {
      items: 2,
      //   nav: true,
    },
    1000: {
      items: 2,
      //   nav: true,
    },
  },
});

// Gallery Slider
$(".facility-carousel").owlCarousel({
  items: 2,
  loop: true,
  margin: 0,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    992: {
      items: 2,
    },
  },
});
/* ----------------------------
      Service Image Changes
  ------------------------------- */
function changesService() {
  document.querySelectorAll('button[data-bs-toggle="tab"]').forEach((t, i) => {
    t.addEventListener("show.bs.tab", function (e) {
      let targetClass = t.dataset.bsTarget;
      var pane = document.querySelector("#serviceImg " + targetClass);
      var sibling = document.querySelector("#serviceImg .tab-pane.active");
      // hide 2nd pane sibling
      sibling.classList.remove("show");
      sibling.classList.remove("active");
      // show 2nd pane
      pane.classList.add("show");
      pane.classList.add("active");
    });
  });
}
changesService();

/* ----------------------------
      Testimony carousel
  ------------------------------- */
$(".testimony-carousel").owlCarousel({
  margin: 0,
  dots: true,
  nav: false,
  stagePadding: 25,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      //   nav: true,
    },
    600: {
      items: 1,
      //   nav: true,
    },
    1000: {
      items: 1,
      //   nav: true,
    },
  },
});

$(".blog-carousel").owlCarousel({
  center: true,
  loop: true,
  margin: 5,
  nav: false,
  dots: false,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 6000,
  autoplaySpeed: 8000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

/* ----------------------------
      testimonial slider
  ------------------------------- */
function testimonialSlider() {
  const testimonialCarousel = document.getElementById("testimonialCarousel");
  testimonialCarousel.addEventListener("slid.bs.carousel", function () {
    const activeItem = this.querySelector(".active");
    document.querySelector(".testi-img img").src =
      activeItem.getAttribute("data-img");
    document.querySelector(".testi-img .circle").style.backgroundColor =
      activeItem.getAttribute("data-color");
  });
}
testimonialSlider();

/* ----------------------------
      gallery modal
  ------------------------------- */
function galleryModal() {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-view")) {
      const src = e.target.getAttribute("src");
      document.querySelector(".modal-img").src = src;
      const myModal = new bootstrap.Modal(
        document.getElementById("galleryModal"),
        options
      );
      myModal.show();
    }
  });
}
galleryModal();

$(document).ready(function () {
  // start sidebar
  $(".sidebar-dropdown-menu").slideUp("fast");
  $(
    ".sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a"
  ).click(function (e) {
    e.preventDefault();

    if (!$(this).parent().hasClass("focused")) {
      $(this).parent().parent().find(".sidebar-dropdown-menu").slideUp("fast");
      $(this).parent().parent().find(".has-dropdown").removeClass("focused");
    }
    $(this).next().slideToggle("fast");
    $(this).parent().toggleClass("focused");
  });

  $(".sidebar-toggle").click(function () {
    $(".sidebar").toggleClass("collapsed");
    $(".sidebar.collapsed").mouseleave(function () {
      $(".sidebar-dropdown-menu").slideUp("fast");
      $(
        ".sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown"
      ).removeClass("focused");
    });
  });

  $(".sidebar-overlay").click(function () {
    $(".sidebar").addClass("collapsed");
    $(".sidebar-dropdown-menu").slideUp("fast");
    $(
      ".sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown"
    ).removeClass("focused");
  });

  if (window.innerWidth < 768) {
    $(".sidebar").addClass("collapsed");
  }
  // end sidebar
});
