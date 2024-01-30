// 📍 splitting
Splitting();

// 📍 lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// 📍 gsap plugin
gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);


//📍 wow animation
new WOW().init();


// 📍 header
document.addEventListener('DOMContentLoaded', function () {
  const section0Tit = document.querySelector('.section0_tit');
  const header = document.querySelector('header');
  const btnScroll = document.querySelector('.btn_scroll');
  const section01H2 = document.querySelector('.section1 h2');

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= section0Tit.offsetTop) {
      section0Tit.style.fontSize = '50px';
      header.style.display = 'block';
      header.style.transition = '0.5s ease-in-out';
    } else {
      section0Tit.style.fontSize = '500px';
      header.style.display = 'none';
    }

    const section01H2Position = section01H2.getBoundingClientRect();

    if (
      section01H2Position.top >= 0 &&
      section01H2Position.bottom <= window.innerHeight
    ) {
      btnScroll.style.opacity = '0';
    } else {
      btnScroll.style.opacity = '1';
    }
  });

  btnScroll.style.transition = 'opacity 0.5s ease-in-out';
});


// 📍 menu
let overlay = document.querySelector(".menu_overlay");
let open = document.querySelector(".logo_open");
let close = document.querySelector(".logo_close");

open.addEventListener("click", () => {
  overlay.style.transform = "translateY(0)";
  tl.reversed(!tl.reversed());
});

close.addEventListener("click", () => {
  overlay.style.transform = "translateY(-100%)";
});


gsap.to('.menu_container', {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  ease: 'none',
  scrollTrigger: {
    trigger: '.section0, .section1',
    start: 'top',
    end: '+=100',
    scrub: true,
  }
});


gsap.to('.menu_container', {
  backgroundColor: '#ff5538',
  ease: 'none',
  scrollTrigger: {
    trigger: '.section2',
    start: 'top 10%',
    end: '+=100',
    scrub: true,
    duration: 1,
  }
});


// 📍 section0
let clutter = "";
let section0_h2 = document.querySelector('.section1>h2').textContent.split("");
section0_h2.forEach((dets) => {
  clutter += `<span>${dets}</span>`;
  document.querySelector('.section1>h2').innerHTML = clutter;
})

gsap.to(".section1>h2>span", {
  scrollTrigger: {
    trigger: ".section1>h2>span",
    start: "top top",
    end: "bottom top",
    scrub: 0.5,
  },
  stagger: 0.2,
  color: "#fff"
})

gsap.set(".section1_btn", {
  opacity: 0
});


gsap.to(".section1_btn", {
  scrollTrigger: {
    trigger: ".section1>h2>span",
    start: "+=500",
    scrub: 3,
    duration: 1,
    ease: "power2.inOut",
    // toggleActions: "play reverse play reverse",
  },
  opacity: 1,
});

gsap.to(".section1>h2>span", {
  scrollTrigger: {
    trigger: ".section1",
    start: "bottom bottom",
    scrub: 3,
    duration: 1,
    ease: "power2.inOut"
  },
  opacity: 0,
});

gsap.to(".section1_btn", {
  scrollTrigger: {
    trigger: ".section1",
    start: "bottom bottom",
    scrub: 3,
    duration: 1,
    ease: "power2.inOut",
    // toggleActions: "play reverse play reverse",
  },
  opacity: 0,
});


// 📍 menu 색 바꾸기
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector('.logo_open').style.color = '#fff';
    } else {
      document.querySelector('.logo_open').style.color = '#000';
    }
  });
}, {
  threshold: 0
});

observer.observe(document.querySelector('.landing_page'));



// 📍 section0
function canvas() {
  const canvas = document.querySelector("#myCanvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  })

  function files(index) {
    var data = `./img2/21.jpg
    ./img2/22.jpg
    ./img2/23.jpg
    ./img2/24.jpg
    ./img2/25.jpg
    ./img2/26.jpg
    ./img2/27.jpg
    ./img2/28.jpg
    ./img2/29.jpg
    ./img2/30.jpg
    ./img2/31.jpg
    ./img2/32.jpg
    ./img2/33.jpg
    ./img2/34.jpg
    ./img2/35.jpg
    ./img2/36.jpg
    ./img2/37.jpg
    ./img2/38.jpg
    ./img2/39.jpg
    ./img2/40.jpg
    ./img2/41.jpg
    ./img2/42.jpg
    ./img2/43.jpg
    ./img2/44.jpg
    ./img2/45.jpg
    ./img2/46.jpg
    ./img2/47.jpg
    ./img2/48.jpg
    ./img2/49.jpg
    ./img2/50.jpg
    ./img2/51.jpg
    ./img2/52.jpg
    ./img2/53.jpg
    ./img2/54.jpg
    ./img2/55.jpg
    ./img2/56.jpg
    ./img2/57.jpg
    ./img2/58.jpg
    ./img2/59.jpg
    ./img2/60.jpg
    ./img2/61.jpg
    ./img2/62.jpg
    ./img2/63.jpg
    ./img2/64.jpg
    ./img2/65.jpg
    ./img2/66.jpg
    ./img2/67.jpg
    ./img2/68.jpg
    ./img2/69.jpg
    ./img2/70.jpg
    ./img2/71.jpg
    ./img2/72.jpg
    ./img2/73.jpg
    ./img2/74.jpg
    ./img2/75.jpg
    ./img2/76.jpg
    ./img2/77.jpg
    ./img2/78.jpg
    ./img2/79.jpg
    ./img2/80.jpg
    ./img2/81.jpg
    ./img2/82.jpg
    ./img2/83.jpg
    ./img2/84.jpg
    ./img2/85.jpg
    ./img2/86.jpg
    ./img2/87.jpg
    ./img2/88.jpg
    ./img2/89.jpg
    ./img2/90.jpg
    ./img2/91.jpg
    ./img2/92.jpg
    ./img2/93.jpg
    ./img2/94.jpg
    ./img2/95.jpg
    ./img2/96.jpg
    ./img2/97.jpg
    ./img2/98.jpg
    ./img2/99.jpg
    ./img2/100.jpg
    ./img2/101.jpg
    ./img2/102.jpg
    ./img2/143.jpg
    ./img2/144.jpg
    ./img2/145.jpg
    ./img2/146.jpg
    ./img2/147.jpg
    ./img2/148.jpg
    ./img2/149.jpg
    ./img2/150.jpg
    ./img2/151.jpg
    ./img2/152.jpg
    ./img2/153.jpg
    ./img2/154.jpg
    ./img2/155.jpg
    ./img2/156.jpg
    ./img2/157.jpg
    ./img2/158.jpg
    ./img2/159.jpg
    ./img2/160.jpg
    ./img2/161.jpg
    ./img2/162.jpg
    ./img2/163.jpg
    ./img2/164.jpg
    ./img2/165.jpg
    ./img2/166.jpg
    ./img2/167.jpg
    ./img2/168.jpg
    ./img2/169.jpg
    ./img2/170.jpg
    ./img2/171.jpg
    ./img2/172.jpg
    ./img2/173.jpg
    ./img2/174.jpg
    ./img2/175.jpg
    ./img2/176.jpg
    ./img2/177.jpg
    ./img2/178.jpg
    ./img2/179.jpg
    ./img2/180.jpg
    ./img2/181.jpg
    ./img2/182.jpg
    ./img2/183.jpg
    ./img2/184.jpg
    ./img2/185.jpg
    ./img2/186.jpg
    ./img2/187.jpg
    ./img2/188.jpg
    ./img2/189.jpg
    ./img2/190.jpg
    ./img2/191.jpg
    ./img2/192.jpg
    ./img2/193.jpg
    ./img2/194.jpg
    ./img2/195.jpg
    ./img2/196.jpg
    ./img2/197.jpg
    ./img2/198.jpg
    ./img2/199.jpg
    ./img2/200.jpg
    ./img2/201.jpg
    ./img2/202.jpg
    ./img2/203.jpg
    ./img2/204.jpg
    ./img2/205.jpg
    ./img2/206.jpg
    ./img2/207.jpg`;

    return data.split("\n")[index];
  }

  var data = ``;

  const frameCount = 147;
  const images = [];
  const imageSeq = {
    frame: 0
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i)
    images.push(img)
  }


  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.15,
      trigger: '.section0>canvas',
      start: 'top top',
      end: '500% top',
    },
    onUpdate: render,
  });

  images[0].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    let canvas = ctx.canvas;
    let hRatio = canvas.width / img.width;
    let vRatio = canvas.height / img.height;

    console.log(hRatio + "," + vRatio);

    let ratio = Math.max(hRatio, vRatio);
    let centershift_x = (canvas.width - img.width * ratio) / 2;
    let centershift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centershift_x, centershift_y, img.width * ratio, img.height * ratio)
  }


  ScrollTrigger.create({
    trigger: ".section0>canvas",
    pin: true,
    start: "top top",
    end: "500% top",
  })
}
canvas();


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


$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// 📍 section4
/* let pTag1 = document.querySelector('.first-parallel');

let imageArr1 = [
  './img/bed4.jpg',
  './img/bed1.jpg',
  './img/bed2.jpg',
  './img/bed3.jpg',
  './img/bed6.jpg',
  './img/bed5.jpg',
]

let count1 = 0;

initImages(pTag1, imageArr1);

function initImages(element, imageArr) {
  imageArr.push(...imageArr)
  imageArr.push(...imageArr)
  for (let i = 0; i < imageArr.length; i++) {
    const img = document.createElement('img');
    img.src = imageArr[i];
    img.alt = `Image ${i + 1}`;
    element.appendChild(img);
  }
}


function animate() {
  count1 = marqueeImage(count1, pTag1, -1);
  count1++;
  window.requestAnimationFrame(animate);
}

function marqueeImage(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    count = 0;
    element.style.transform = `translate(0,0)`;
  }
  element.style.transform = `translate(${count * direction}px,0)`;
  return count;
}
 */
// animate();



// 📍 section5
const horSection = gsap.utils.toArray('.port_desc .port');

const horiz1 = gsap.to(horSection, {
  x: (-90 * (horSection.length - 1)) + "%",
  xPercent: -90 * (horSection.lenth - 1),
  scrollTrigger: {
    trigger: '.port_desc',
    start: 'top 20%',
    end: '+=4000',
    scrub: 5,
    pin: true,
  }
})


// 📍 section7
const list = document.querySelector('.section7 .list');

var sections = document.querySelector(".list");
var tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section7",
    pin: ".section7",
    scrub: 2,
    start: "top top",
    end: "+=1300",
  }
}).to(list, {
  yPercent: -50,
  xPercent: 60
})


// 📍 section7 lamp img
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".slide-container",
    start: "top top",
    end: "bottom bottom",
  }
});

tl.from(".slide-container", {
  opacity: 0
});
tl.to(".slide-container", {
  opacity: 1,
  scrub: 1
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".slide-container2",
    start: "top top",
    end: "bottom bottom",
  }
});

tl2.from(".slide-container2", {
  opacity: 0
});
tl2.to(".slide-container2", {
  opacity: 1,
  scrub: 1
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






// 📍 sec8 bgc
gsap.to('.page', {
  background: 'linear-gradient(#ff5538, #ffffff)',
  ease: 'none',
  scrollTrigger: {
    trigger: '.page',
    start: 'top 70%',
    endTrigger: '.page', // 필요에 따라 끝 트리거 요소 조정
    end: 'bottom top', // 필요에 따라 끝 위치 조정
    scrub: 3
  }
});


// 📍 section8_video
let video = document.querySelector('.page video'),
  videoWidth,
  videoHeight;

function setVideo() {
  videoWidth = video.offsetWidth;
  videoHeight = video.offsetHeight;
}
setVideo();
window.addEventListener("resize", setVideo)

let inset = {
  x: 30,
  y: 15,
  r: 100,
};
let snap = gsap.utils.snap(10);

gsap.timeline({
    scrollTrigger: {
      trigger: ".video-wrapper",
      start: "center center",
      end: "+=1000",
      pin: true,
      scrub: true
    }
  })
  .fromTo(inset, {
    x: 30,
    y: 15,
    r: 100,
  }, {
    duration: 1,
    x: 0,
    y: 0,
    r: 0,
    onUpdate() {
      video.style.clipPath = `inset(${(inset.x)* videoWidth / 200}px ${(inset.y)*videoHeight / 200}px round ${snap(inset.r)}px )`
    }
  })




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
    // end: "+=4000",
    scrub: 1,
    pin: true,
    onUpdate: () => {
      updateScaleAnPosition()
    }
  }
})



// 📍 footer
const footerWrap = document.querySelector('.footer_wrap');

gsap.to(footerWrap, {
  scrollTrigger: {
    trigger: '.footer_wrap',
    start: 'top 20%',
    end: 'bottom 100%',
    toggleActions: 'play none none reverse',
    onUpdate: ({
      progress,
      direction,
      isActive
    }) => {
      const textColor = direction === 1 ? '#fff' : '#000';
      footerWrap.style.setProperty('--text-color', textColor);
    },
  },
  backgroundColor: '#ff5538',
  duration: 1,
});