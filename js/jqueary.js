// 📍 section2
$(document).ready(function () {
  $('.sec2_imgslide').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    fade: true,
    infinite: true,
  });
});

// 📍 section3
$(document).ready(function () {
  var $sm = 480;
  var $md = 768;

  function resizeThis() {
    $imgH = $('.middle img').width();
    if ($(window).width() >= $sm) {
      $('.left,.right,.section3').css('height', $imgH);
    } else {
      $('.left,.right,.section3').css('height', 'auto');
    }
  }

  resizeThis();

  $(window).resize(function () {
    resizeThis();
  });

  $(window).scroll(function () {
    $('.section3').each(function () {
      var $elementPos = $(this).offset().top;
      var $scrollPos = $(window).scrollTop();
      var $sectionH = $(this).height();
      var $h = $(window).height();
      var $sectionVert = (($h / 2) - ($sectionH / 4));

      if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
        $(this).addClass('animate');
      } else {
        $(this).removeClass('animate');
      }
    });
  });
});

// 📍 section7 lamp img
function slideShows() {
  var index1 = 0;
  var index2 = 0;

  function slideShow1() {
    var slides1 = document.getElementsByClassName("slide1");
    for (var i = 0; i < slides1.length; i++) {
      slides1[i].classList.remove("active");
    }
    index1++;
    if (index1 > slides1.length) {
      index1 = 1;
    }
    slides1[index1 - 1].classList.add("active");
    setTimeout(slideShow1, 3000);
  }

  function slideShow2() {
    var slides2 = document.getElementsByClassName("slide2");
    for (var i = 0; i < slides2.length; i++) {
      slides2[i].classList.remove("active");
    }
    index2++;
    if (index2 > slides2.length) {
      index2 = 1;
    }
    slides2[index2 - 1].classList.add("active");
    setTimeout(slideShow2, 2000);
  }

  slideShow1();
  slideShow2();
}

slideShows();

// 📍 section9
let slider = document.querySelector('.sec9_slider');
let slideWrapper = document.querySelector('.sec9_slider');
let slides = document.querySelectorAll('.sec9_slide');

function updateScaleAnPosition() {
  slides.forEach((slide) => {
    let rect = slide.getBoundingClientRect();
    let centerPosition = (rect.left + rect.right) / 2;
    let distanceFromCenter = centerPosition;
    let scale;
    if (distanceFromCenter > 0) {
      scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth)
    } else {
      scale = Math.min(0.5, 1 - Math.abs(distanceFromCenter) / window.innerWidth)
    }
    gsap.set(slide, {
      scale: scale
    })
  })
}

updateScaleAnPosition();

let horiz = gsap.to(slides, {
  xPercent: -97 * (slides.length - 1),
  scrollTrigger: {
    trigger: '.section9',
    start: 'top top',
    end: "+=4000",
    scrub: 1,
    pin: true,
    onUpdate: () => {
      updateScaleAnPosition()
    }
  }
});
