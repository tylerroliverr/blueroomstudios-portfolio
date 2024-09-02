const loader = document.getElementById('loader');

window.addEventListener("load", (event) => {

function scrollToTop() {
    window.scrollTo(0, 0);
}

//AUTO IMAGE FILL
// Sample data for each category
const categories = [
    {
        name: "medieval",
        images: [
            { path: "./resources/images/1 (17).jfif", text: "unsure" },
            { path: "./resources/images/1 (18).jfif", text: "spencer davie" },
            { path: "./resources/images/1 (14).jfif", text: "unsure" },
            { path: "./resources/images/1 (19).jfif", text: "unsure" },
            { path: "./resources/images/1 (21).jfif", text: "unsure" },
            { path: "./resources/images/1 (22).jfif", text: "unsure" },
            { path: "./resources/images/1 (23).jfif", text: "unsure" },
            { path: "./resources/images/1.jfif", text: "kot__ko" },
            { path: "./resources/images/1 (20).jfif", text: "henijay" },
            { path: "./resources/images/1 (24).jfif", text: "unsure" },
            { path: "./resources/images/1 (25).jfif", text: "unsure" },
            { path: "./resources/images/1 (26).jfif", text: "unsure" },
            { path: "./resources/images/1 (27).jfif", text: "unsure" },
            { path: "./resources/images/1 (34).jfif", text: "unsure" },
            { path: "./resources/images/1 (28).jfif", text: "unsure" },
            { path: "./resources/images/1 (29).jfif", text: "unsure" },
            { path: "./resources/images/1 (2).jfif", text: "unsure" },
            { path: "./resources/images/1 (3).jfif", text: "unsure" },
            { path: "./resources/images/1 (4).jfif", text: "unsure" },
            { path: "./resources/images/1 (5).jfif", text: "unsure" },
            { path: "./resources/images/1 (6).jfif", text: "unsure" },
            { path: "./resources/images/1 (7).jfif", text: "unsure" },
            { path: "./resources/images/1 (8).jfif", text: "unsure" },
            { path: "./resources/images/1 (9).jfif", text: "unsure" },
            { path: "./resources/images/1 (10).jfif", text: "unsure" },
            { path: "./resources/images/1 (11).jfif", text: "sunsure" },
            { path: "./resources/images/1 (12).jfif", text: "unsure" },
            { path: "./resources/images/1 (13).jfif", text: "excalibur 1981" },
            { path: "./resources/images/1 (14).jfif", text: "unsure" },
            { path: "./resources/images/1 (15).jfif", text: "unsure" },
            { path: "./resources/images/1 (16).jfif", text: "unsure" },
            { path: "./resources/images/1 (30).jfif", text: "unsure" },
            { path: "./resources/images/1 (31).jfif", text: "unsure" },
            { path: "./resources/images/1 (32).jfif", text: "unsure" },
            { path: "./resources/images/1 (33).jfif", text: "unsure" },
            { path: "./resources/images/1 (36).jfif", text: "unsure" },
            { path: "./resources/images/1 (37).jfif", text: "unsure" },
        ]
    },
    {
        name: "trinkets",
        images: [
            { path: "./resources/trinkets/trinkets (2).jfif", text: "c. bonnefond" },
            { path: "./resources/trinkets/trinkets.jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (1).jpg", text: "unsure" },
            { path: "./resources/trinkets/trinkets (1).jfif", text: "austin james smith" },
            { path: "./resources/trinkets/trinkets (3).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (4).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (5).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (6).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (7).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (8).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (9).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (10).jfif", text: "jacob wise" },
            { path: "./resources/trinkets/trinkets (11).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (12).jfif", text: "joey camacho" },
            { path: "./resources/trinkets/trinkets (13).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (14).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (15).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (16).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (17).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (18).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (19).jfif", text: "unsure" },
            { path: "./resources/trinkets/trinkets (20).jfif", text: "gustav gurschner" },
        ]
    },
    {
        name: "flaura",
        images: [
            { path: "./resources/flaura/flaura (2).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (3).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (4).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (5).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (6).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (7).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (8).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (9).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (10).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (11).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (12).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (14).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (15).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (16).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (17).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (18).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (19).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (20).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (21).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (22).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (23).jfif", text: "unsure" },
            { path: "./resources/flaura/flaura (24).jfif", text: "unsure" },
        ]
    },
    {
        name: "dirt",
        images: [
            { path: "./resources/dirt/dirt (1).jfif", text: "pu'er, yunnan(?)" },
            { path: "./resources/dirt/dirt (3).jfif", text: "alan cressler" },
            { path: "./resources/dirt/dirt (4).jfif", text: "don alfonso" },
            { path: "./resources/dirt/dirt (5).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (6).jfif", text: "pete sherrard" },
            { path: "./resources/dirt/dirt (7).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (8).jfif", text: "pilgrim's badge" },
            { path: "./resources/dirt/dirt (9).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (10).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (11).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (12).jfif", text: "yajifun" },
            { path: "./resources/dirt/dirt (13).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (14).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (15).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (16).jfif", text: "diane dal pra & services généraux" },
            { path: "./resources/dirt/dirt (17).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (18).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (19).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (20).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (21).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (22).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (23).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (24).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (25).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (26).jfif", text: "gerzeh palette" },
            { path: "./resources/dirt/dirt (27).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (28).jfif", text: "georg jenson" },
            { path: "./resources/dirt/dirt (29).jfif", text: "unsure" },
            { path: "./resources/dirt/dirt (30).jfif", text: "leo lionni" },
            { path: "./resources/dirt/dirt (31).jfif", text: "ludovich alleaume" },
        ]
    },
    {
        name: "etherial",
        images: [
            { path: "./resources/etherial/etherial (1).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (1).webp", text: "unsure" },
            { path: "./resources/etherial/etherial (2).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (3).jfif", text: "mark rappaport" },
            { path: "./resources/etherial/etherial (4).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (5).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (7).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (8).jfif", text: "a date with an angel 1987" },
            { path: "./resources/etherial/etherial (9).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (10).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (11).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (12).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (13).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (14).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (15).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (16).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (17).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (18).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (19).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (20).jfif", text: "unsure" },
            { path: "./resources/etherial/etherial (21).jfif", text: "unsure" },
        ]
    },
    {
        name: "garden",
        images: [
            { path: "./resources/garden/garden (1).jfif", text: "unsure" },
            { path: "./resources/garden/garden (1).jpg", text: "unsure" },
            { path: "./resources/garden/garden (2).jfif", text: "unsure" },
            { path: "./resources/garden/garden (3).jfif", text: "unsure" },
            { path: "./resources/garden/garden (4).jfif", text: "unsure" },
            { path: "./resources/garden/garden (5).jfif", text: "unsure" },
            { path: "./resources/garden/garden (6).jpg", text: "jeff hamada" },
            { path: "./resources/garden/garden (7).jfif", text: "unsure" },
            { path: "./resources/garden/garden (8).jfif", text: "unsure" },
            { path: "./resources/garden/garden (9).jfif", text: "unsure" },
            { path: "./resources/garden/garden (10).jfif", text: "unsure" },
            { path: "./resources/garden/garden (11).jfif", text: "unsure" },
            { path: "./resources/garden/garden (12).jfif", text: "unsure" },
            { path: "./resources/garden/garden (13).jfif", text: "unsure" },
            { path: "./resources/garden/garden (14).jfif", text: "unsure" },
            { path: "./resources/garden/garden (15).jfif", text: "chris and robin hutt" },
            { path: "./resources/garden/garden (16).jfif", text: "unsure" },
            { path: "./resources/garden/garden (17).jfif", text: "unsure" },
        ]
    },
    {
        name: "graphic",
        images: [
            { path: "./resources/graphic/graphic (1).jfif", text: "Paul-Ãmile" },
            { path: "./resources/graphic/graphic (1).jpg", text: "unsure" },
            { path: "./resources/graphic/graphic (2).jfif", text: "hyunjung huh" },
            { path: "./resources/graphic/graphic (3).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (4).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (5).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (6).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (7).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (8).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (9).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (10).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (11).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (12).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (13).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (14).jfif", text: "@kylie_francis" },
            { path: "./resources/graphic/graphic (15).jfif", text: "demande spéciale" },
            { path: "./resources/graphic/graphic (16).jfif", text: "marie léon" },
            { path: "./resources/graphic/graphic (17).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (18).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (19).jfif", text: "@eeeeelllfffyyyyyyyyy" },
            { path: "./resources/graphic/graphic (20).jfif", text: "doyald young" },
            { path: "./resources/graphic/graphic (21).jfif", text: "cherry ling" },
            { path: "./resources/graphic/graphic (22).jfif", text: "marian bantjes" },
            { path: "./resources/graphic/graphic (23).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (24).jfif", text: "unsure" },
            { path: "./resources/graphic/graphic (25).jfif", text: "mike lopez" },
            { path: "./resources/graphic/graphic (26).jfif", text: "oscar woodiwiss" },
            { path: "./resources/graphic/graphic (27).jfif", text: "josse pyl" },
            { path: "./resources/graphic/graphic (28).jfif", text: "unsure" },
        ]
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to generate image HTML for a category
function generateImageHTML(category) {
    shuffleArray(category.images);
    const imageHTML = category.images.map(image => `
            <div class="image-box">
                <img src="${image.path}" alt="">
                <p>${image.text}</p>
            </div>
        `).join('');

    return imageHTML;
}

function initializeImages() {
    return new Promise((resolve, reject) => {
        const imagesToLoad = [];
        let imagesLoaded = 0;
        const totalImages = categories.reduce((acc, category) => acc + category.images.length, 0);

        categories.forEach(category => {
            category.images.forEach(image => {
                const img = new Image();
                img.onload = () => {
                    imagesLoaded++;
                    const progress = Math.floor((imagesLoaded / totalImages) * 100); // Calculate progress percentage
                    updateProgress(progress); // Call a function to update the progress UI
                    if (imagesLoaded === totalImages) {
                        resolve(); // Resolve the promise when all images have loaded
                    }
                };
                img.onerror = (error) => {
                    reject(error); // Reject the promise if there's an error loading an image
                };
                img.src = image.path;
                imagesToLoad.push(img);
            });

            // Generate images for the corresponding image hover wrapper
            //desktop
            const imageHoverWrapper = document.querySelector(`.image-hover-wrapper.${category.name}-images`);
            imageHoverWrapper.innerHTML = generateImageHTML(category);

            //phone
            const phoneHover = document.querySelector(`.phone-hover.${category.name}-images-phone`);
            phoneHover.innerHTML = generateImageHTML(category);
        });
    });
}

function updateProgress(progress) {
    // Update UI with the progress (e.g., update a progress bar or counter)
    const progressBarText = document.getElementById('loader-text');
    progressBarText.innerText = `${progress}%`;
}

// Call the initialization function
initializeImages()
    .then(() => {
        console.log('All images loaded successfully.');
        loader.classList.add('loaded');
        // Do something when all images have loaded
    })
    .catch(error => {
        console.error('Error loading images:', error);
    });

//////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

/////Desktop EventListeners
function setupDesktopListeners() {
    var infoButton = document.querySelector('.info');
    var infoElement = document.querySelector('.information');

    infoButton.addEventListener('click', function () {
        infoElement.style.display = 'flex';
        setTimeout(function () {
            infoElement.style.opacity = 1;
        }, 50);
        closeAllBoxes();
    });

    var boxes = [
        { id: 'medieval', boxClass: '.medieval-images', inactiveImage: './resources/images/1 (17).jfif', activeImage: './resources/blue_thumbnails/armour.jfif' },
        // { id: 'flaura', boxClass: '.flaura-images', inactiveImage: './resources/flaura/flaura (8).jfif', activeImage: './resources/blue_thumbnails/flaura.webp' },
        { id: 'trinkets', boxClass: '.trinkets-images', inactiveImage: './resources/trinkets/trinkets (2).jfif', activeImage: './resources/blue_thumbnails/trinkets.jfif' },
        { id: 'dirt', boxClass: '.dirt-images', inactiveImage: './resources/dirt/dirt (10).jfif', activeImage: './resources/blue_thumbnails/dirt.webp' },
        { id: 'etherial', boxClass: '.etherial-images', inactiveImage: './resources/etherial/etherial (19).jfif', activeImage: './resources/blue_thumbnails/etherial.webp' },
        { id: 'garden', boxClass: '.garden-images', inactiveImage: './resources/garden/garden (6).jpg', activeImage: './resources/blue_thumbnails/garden.webp' },
        { id: 'graphic', boxClass: '.graphic-images', inactiveImage: './resources/graphic/graphic (19).jfif', activeImage: './resources/blue_thumbnails/graphic.webp' },
        // Add more boxes in the future as needed
    ];

    function toggleBox(box) {
        var trigger = document.getElementById(box.id);
        var boxElement = document.querySelector(box.boxClass);
        var imageBox = boxElement.querySelectorAll('.image-box');
        var thumbnail = document.querySelector('.thumbnail');

        // Close infoElement before opening the selected box
        infoElement.style.display = 'none';

        if (boxElement.style.display === 'none') {
            // If the box is not active, show it
            closeAllBoxes();
            boxElement.style.display = 'flex';

            trigger.src = box.activeImage;
            trigger.style.opacity = 0.65;
            trigger.style.fontStyle = 'italic';

            setTimeout(function () {
                Array.from(imageBox).forEach(function (imageBoxs) {
                    imageBoxs.style.opacity = 1;
                    scrollToTop();
                });
            }, 50);

        } else {
            // If the box is already active, close it
            setTimeout(function () {
                boxElement.style.display = 'none';
            }, 1000);

            trigger.src = box.inactiveImage;
            trigger.style.opacity = 1;
            trigger.style.fontStyle = 'normal';

            Array.from(imageBox).forEach(function (imageBoxs) {
                imageBoxs.style.opacity = 0;
            });
        }
    }

    function closeAllBoxes() {
        boxes.forEach(function (box) {
            var trigger = document.getElementById(box.id);
            var boxElement = document.querySelector(box.boxClass);

            boxElement.style.display = 'none';
            trigger.src = box.inactiveImage;
            trigger.style.opacity = 1;
            trigger.style.fontStyle = 'normal';

            var imageBox = boxElement.querySelectorAll('.image-box');
            Array.from(imageBox).forEach(function (imageBoxs) {
                imageBoxs.style.opacity = 0;
            });
        });
    }

    boxes.forEach(function (box) {
        var trigger = document.getElementById(box.id);

        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleBox(box);
        });
    });
}

///////////////////////////////////////////////////////////////

/////Phone EventListeners
function setupMobileListeners() {
    var infoButton = document.querySelector('.info');
    var infoElement = document.querySelector('.information');

    infoButton.addEventListener('click', function () {
        infoElement.style.display = 'flex';
        setTimeout(function () {
            infoElement.style.opacity = 1;
        }, 500);
        closeAllBoxes();
    });

    var boxes = [
        { id: 'medieval-phone', boxClass: '.medieval-images-phone', inactiveImage: './resources/images/1 (17).jfif', activeImage: './resources/blue_thumbnails/armour.jfif' },
        // { id: 'flaura-phone', boxClass: '.flaura-images-phone', inactiveImage: './resources/flaura/flaura (8).jfif', activeImage: './resources/blue_thumbnails/flaura.webp' },
        { id: 'trinkets-phone', boxClass: '.trinkets-images-phone', inactiveImage: './resources/trinkets/trinkets (2).jfif', activeImage: './resources/blue_thumbnails/trinkets.jfif' },
        { id: 'dirt-phone', boxClass: '.dirt-images-phone', inactiveImage: './resources/dirt/dirt (10).jfif', activeImage: './resources/blue_thumbnails/dirt.webp' },
        { id: 'etherial-phone', boxClass: '.etherial-images-phone', inactiveImage: './resources/etherial/etherial (19).jfif', activeImage: './resources/blue_thumbnails/etherial.webp' },
        { id: 'garden-phone', boxClass: '.garden-images-phone', inactiveImage: './resources/garden/garden (6).jpg', activeImage: './resources/blue_thumbnails/garden.webp' },
        { id: 'graphic-phone', boxClass: '.graphic-images-phone', inactiveImage: './resources/graphic/graphic (19).jfif', activeImage: './resources/blue_thumbnails/graphic.webp' },
        // Add more boxes in the future as needed
    ];

    function toggleBox(box) {
        var trigger = document.getElementById(box.id);
        var boxElement = document.querySelector(box.boxClass);
        var imageBox = boxElement.querySelectorAll('.image-box');

        infoElement.style.display = 'none';
        infoElement.style.opacity = 0;

        if (boxElement.style.display === 'none') {
            // If the box is not active, show it
            closeAllBoxes();
            boxElement.style.display = 'flex';

            trigger.src = box.activeImage;
            trigger.style.opacity = 0.65;
            trigger.style.fontStyle = 'italic';

            setTimeout(function () {
                Array.from(imageBox).forEach(function (imageBoxs) {
                    imageBoxs.style.opacity = 1;
                    scrollToTop();
                });
            }, 50);

        } else {
            // If the box is already active, close it
            setTimeout(function () {
                boxElement.style.display = 'none';
            }, 1000);

            trigger.src = box.inactiveImage;
            trigger.style.opacity = 1;
            trigger.style.fontStyle = 'normal';

            Array.from(imageBox).forEach(function (imageBoxs) {
                imageBoxs.style.opacity = 0;
            });
        }
    }

    function closeAllBoxes() {
        boxes.forEach(function (box) {
            var trigger = document.getElementById(box.id);
            var boxElement = document.querySelector(box.boxClass);

            boxElement.style.display = 'none';
            trigger.src = box.inactiveImage;
            trigger.style.opacity = 1;
            trigger.style.fontStyle = 'normal';

            var imageBox = boxElement.querySelectorAll('.image-box');
            Array.from(imageBox).forEach(function (imageBoxs) {
                imageBoxs.style.opacity = 0;
            });
        });
    }

    boxes.forEach(function (box) {
        var trigger = document.getElementById(box.id);

        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleBox(box);
        });
    });
}

setupDesktopListeners();
setupMobileListeners();

});