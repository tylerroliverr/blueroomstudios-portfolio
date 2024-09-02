document.addEventListener('DOMContentLoaded', function () {
    var cursorContainer = document.getElementById('cursor-container');
    var customCursor = document.getElementById('custom-cursor');
    var link = document.querySelectorAll('.link');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;

        customCursor.style.transform = 'translate(' + (x - customCursor.clientWidth / 2) + 'px, ' + (y - customCursor.clientHeight / 2) + 'px)';
    });

    document.addEventListener("mousedown", function() {
        customCursor.classList.add('clicked');
    });

    document.addEventListener("mouseup", function() {
        setTimeout(() => {
            customCursor.classList.remove('clicked');
        }, "50");
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

});

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const images = [
    {
        name: "HeroImages",
        images: [
            {
                path: "./resources/images/doubleimage.png",
                text: "Life is a delicate dance between existence and oblivion, where each breath is a reminder of the ephemeral nature of our being, and every heartbeat echoes the fragility of our existence in the vast expanse of time."
            },
            {
                path: "./resources/images/longwhitehair.png",
                text: "Like delicate petals adrift upon the breeze, our lives unfold in delicate arcs of joy and sorrow, illuminated by the brilliance of fleeting moments."
            },
            {
                path: "./resources/images/windgirl.png",
                text: " Each soul, a delicate note in this celestial composition, resonates with the gentle whisper of eternity, yet is bound by the fragile threads of mortality."
            },
            {
                path: "./resources/images/shortbob.png",
                text: "Life is a delicate dance between existence and oblivion, where each breath is a reminder of the ephemeral nature of our being, and every heartbeat echoes the fragility of our existence in the vast expanse of time."
            },
            {
                path: "./resources/images/shavedhead.png",
                text: "And so, let us embrace the fragility of life not with fear, but with reverence, for it is this delicate balance between existence and oblivion that gives rise to the most exquisite moments of beauty in our journey through the cosmos."
            }
        ]
    }
];

const leftInactiveImage = document.querySelector('.inactive-images.left');
const activeImage = document.querySelector('.active-image');
const rightInactiveImage = document.querySelector('.inactive-images.right');
const activeImageText = document.querySelector('.image-text');

// Set initial active image
let activeIndex = 0;
activeImage.style.backgroundImage = `url("${images[0].images[activeIndex].path}")`;

// Update images
function updateImages() {
    leftInactiveImage.style.backgroundImage = `url("${images[0].images[activeIndex === 0 ? images[0].images.length - 1 : activeIndex - 1].path}")`;
    rightInactiveImage.style.backgroundImage = `url("${images[0].images[activeIndex === images[0].images.length - 1 ? 0 : activeIndex + 1].path}")`;
    activeImage.style.backgroundImage = `url("${images[0].images[activeIndex].path}")`;
    activeImageText.innerHTML = `${images[0].images[activeIndex].text}`;
}

// Handle left arrow click
leftInactiveImage.addEventListener('click', function () {
    activeIndex = activeIndex === 0 ? images[0].images.length - 1 : activeIndex - 1;
    updateImages();
});

// Handle right arrow click
rightInactiveImage.addEventListener('click', function () {
    activeIndex = activeIndex === images[0].images.length - 1 ? 0 : activeIndex + 1;
    updateImages();
});

// Update images initially
updateImages();

const openTag = document.querySelector('.openTag');
const closeTag = document.querySelector('.closeTag');
const slideshowContainer = document.querySelector('.slideshow-container');
const infoContainer = document.querySelector('.infoContainer');

openTag.addEventListener("click", function () {
    slideshowContainer.classList.add("inactive");
    openTag.classList.add("active");
    closeTag.classList.add("active");
    infoContainer.classList.add("active");
});

closeTag.addEventListener("click", function () {
    slideshowContainer.classList.remove("inactive");
    openTag.classList.remove("active");
    closeTag.classList.remove("active");
    infoContainer.classList.remove("active");
});