/* ----------------------------
      header menu
  ------------------------------- */
// function headerMenu() {
//   const openHeaderMenu = document.querySelector(".open-header-menu"),
//     closeHeaderMenu = document.querySelector(".close-header-menu"),
//     headerMenu = document.querySelector(".header-menu"),
//     menuOverlay = document.querySelector(".menu-overlay"),
//     mediaSize = 991;

//   openHeaderMenu.addEventListener("click", toggleNav);
//   closeHeaderMenu.addEventListener("click", toggleNav);
//   // close the navMenu by clicking outside
//   menuOverlay.addEventListener("click", toggleNav);

//   function toggleNav() {
//     headerMenu.classList.toggle("open");
//     menuOverlay.classList.toggle("active");
//     document.body.classList.toggle("hidden-scrolling");
//   }

//   headerMenu.addEventListener("click", (event) => {
//     if (
//       event.target.hasAttribute("data-bs-toggle") &&
//       window.innerWidth <= mediaSize
//     ) {
//       // prevent default anchor click behavior
//       event.preventDefault();
//       const menuItemHasChildren = event.target.parentElement;
//       // if menuItemHasChildren is already expanded, collapse it
//       if (menuItemHasChildren.classList.contains("active")) {
//         collapseSubMenu();
//       } else {
//         // collapse existing expanded menuItemHasChildren
//         if (headerMenu.querySelector(".menu-item-has-children.active")) {
//           collapseSubMenu();
//         }

//         // expand new menuItemChildren
//         menuItemHasChildren.classList.add("active");
//         const subMenu = menuItemHasChildren.querySelector(".sub-menu");
//         subMenu.style.maxHeight = subMenu.scrollHeight + "px";
//       }
//     }
//   });
//   function collapseSubMenu() {
//     headerMenu
//       .querySelector(".menu-item-has-children.active .sub-menu")
//       .removeAttribute("style");
//     headerMenu
//       .querySelector(".menu-item-has-children.active")
//       .classList.remove("active");
//   }
//   function resizeFix() {
//     // if headerMenu is open, close it
//     if (headerMenu.classList.contains("open")) {
//       toggleNav();
//     }
//     // if menuItemHasChildren is expanded, collapse it
//     if (headerMenu.querySelector(".menu-item-has-children.active")) {
//       collapseSubMenu();
//     }
//   }
//   window.addEventListener("resize", function () {
//     if (this.innerWidth > mediaSize) {
//       resizeFix();
//     }
//   });
// }
// headerMenu();

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
function accordionReason() {
  const triggerTabList = document.querySelectorAll(
    "#accordionReason .accordion-item"
  );
  triggerTabList.forEach((triggerEl) => {
    const tabTrigger = new bootstrap.Tab(triggerEl);

    triggerEl.addEventListener("click", (event) => {
      event.preventDefault();
      tabTrigger.show();
    });
  });

  const triggerReasonOne = document.querySelector(
    '#accordionReason .accordion-item[data-bs-target="#reason-one"]'
  );
  bootstrap.Tab.getInstance(triggerReasonOne).show(); // Select tab by name
}
accordionReason();

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
