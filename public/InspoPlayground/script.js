const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//////Opacity on Load
window.onload = function () {
    var element = document.querySelector(".body");
    element.style.opacity = 1;
};

////////////////////////////////////////////////////////////////

////Cursor Hover Animation
document.addEventListener('DOMContentLoaded', function () {
    var cursorContainer = document.getElementById('cursor-container');
    var customCursor = document.getElementById('custom-cursor');
    var images = document.querySelectorAll('.images-grid img');
    var imageBox = document.querySelectorAll('.image-box img');
    var phoneimages = document.querySelectorAll('.phone-grid img');
    var link = document.querySelectorAll('.link');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;

        customCursor.style.transform = 'translate(' + (x - customCursor.clientWidth / 2) + 'px, ' + (y - customCursor.clientHeight / 2) + 'px)';
    });

    document.documentElement.addEventListener('mouseleave', function () {
        customCursor.classList.add('hidden-cursor');
    });

    document.documentElement.addEventListener('mouseenter', function () {
        cursorContainer.style.visibility = 'visible';
        cursorContainer.style.opacity = '1';
        customCursor.classList.remove('hidden-cursor');
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

    images.forEach(function (image) {
        image.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        image.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });

    imageBox.forEach(function (image) {
        image.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        image.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });

    phoneimages.forEach(function (image) {
        image.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        image.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });
});

///////////////////////////////////////////////////////////////

//THUMBNAILS
const phoneCategories = [
    { id: "medieval-phone", path: "./resources/images/1 (17).jfif", name: "swords & armour" },
    { id: "trinkets-phone", path: "./resources/trinkets/trinkets (2).jfif", name: "trinkets & treasures" },
    { id: "graphic-phone", path: "./resources/graphic/graphic (19).jfif", name: "graphics & digital" },
    { id: "dirt-phone", path: "./resources/dirt/dirt (10).jfif", name: "patterns & dirt" },
    { id: "etherial-phone", path: "./resources/etherial/etherial (19).jfif", name: "etherial & religion" },
    { id: "garden-phone", path: "./resources/garden/garden (6).jpg", name: "grass & cottage" },
    // { id: "flaura-phone", path: "./resources/flaura/flaura (8).jfif" },
    // Add more phone categories as needed
];

const desktopCategories = [
    { id: "medieval", path: "./resources/images/1 (17).jfif", name: "swords & armour" },
    { id: "trinkets", path: "./resources/trinkets/trinkets (2).jfif", name: "trinkets & treasures" },
    { id: "graphic", path: "./resources/graphic/graphic (19).jfif", name: "graphics & digital" },
    { id: "dirt", path: "./resources/dirt/dirt (10).jfif", name: "patterns & dirt" },
    { id: "etherial", path: "./resources/etherial/etherial (19).jfif", name: "etherial & religion" },
    { id: "garden", path: "./resources/garden/garden (6).jpg", name: "grass & cottage" },
    // { id: "flaura", path: "./resources/flaura/flaura (8).jfif" },
    // Add more phone categories as needed
];

// Function to generate phone HTML
function generateThumbnailHTML(category) {
    // return `
    //     <img id="${category.id}" src="${category.path}" alt="">
    // `;
    return `<p id="${category.id}" class="link">${category.name}</p>`;
}

// Function to initialize the phone grid
function initializeThumbnailGrid() {
    const imagesPhone = document.getElementById('imagesPhone');
    const imagesDesktop = document.getElementById('imagesGrid');

    phoneCategories.forEach(category => {
        // Generate phone images
        const phoneHTML = generateThumbnailHTML(category);
        imagesPhone.innerHTML += phoneHTML;
    });

    desktopCategories.forEach(category => {
        // Generate phone images
        const desktopHTML = generateThumbnailHTML(category);
        imagesDesktop.innerHTML += desktopHTML;
    });
}

// Call the initialization function
initializeThumbnailGrid();