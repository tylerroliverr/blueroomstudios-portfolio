document.addEventListener('DOMContentLoaded', function () {
    var cursorContainer = document.getElementById('cursor-container');
    var customCursor = document.getElementById('custom-cursor');
    var link = document.querySelectorAll('.link');
    var images = document.querySelectorAll('.img');

    document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;

      customCursor.style.transform = 'translate(' + (x - customCursor.clientWidth / 2) + 'px, ' + (y - customCursor.clientHeight / 2) + 'px)';
  });

  document.documentElement.addEventListener('mouseleave', function () {
      customCursor.classList.add('hidden');
  });

  document.documentElement.addEventListener('mouseenter', function () {
      cursorContainer.style.visibility = 'visible';
      cursorContainer.style.opacity = '1';
      customCursor.classList.remove('hidden');
      customCursor.style.visibility = 'visible'; // Always show cursor on mousemove
  });

    link.forEach(function (links) {
        links.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        links.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });

    images.forEach(function (img) {
        img.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        img.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });

});

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll('.image-box');

images.forEach(image => {
    gsap.fromTo(image, {
      yPercent: 50,
      opacity: 0,
      scale: 0.7
    }, {
      yPercent: 0,
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: image,
        start: 'top 100%',
        end: 'top 85%',
        // toggleActions: 'play none none none',
        scrub: 1.5,
        // markers: true,
      }
    });
  });