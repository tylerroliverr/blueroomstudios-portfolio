$(".section").ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.04,
});

const sections = document.querySelectorAll('.section');
let currentIndex = 0;
let isScrolling = false;

const scrollToSection = (index) => {
  if (index < 0 || index >= sections.length) return;

  isScrolling = true;
  currentIndex = index;

  sections[index].scrollIntoView({
    behavior: 'smooth'
  });

  setTimeout(() => {
    isScrolling = false;
  }, 2000); // Lock scroll for 1 second
};

// Hide intro on click
// Lock scroll by default
document.body.classList.add('no-scroll');

document.querySelector('.enter-container a').addEventListener('click', (e) => {
  e.preventDefault();

  // Unlock scroll
  document.body.classList.remove('no-scroll');

  // Scroll to first section
  scrollToSection(0);

  // Hide the overlay
  const enter = document.querySelector('.enter-container');
  enter.classList.add('hidden');

  // Optional: remove from DOM after fade
  setTimeout(() => {
    enter.style.display = 'none';
  }, 700); // matches transition time
});


// Wheel scroll (desktop)
window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0) {
    scrollToSection(currentIndex + 1);
  } else if (e.deltaY < 0) {
    scrollToSection(currentIndex - 1);
  }
}, { passive: true });

// Arrow keys
window.addEventListener('keydown', (e) => {
  if (isScrolling) return;

  if (e.key === 'ArrowDown') {
    scrollToSection(currentIndex + 1);
  } else if (e.key === 'ArrowUp') {
    scrollToSection(currentIndex - 1);
  }
});

// Touch swipe (mobile)
let touchStartY = 0;
let touchEndY = 0;

window.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].clientY;
});

window.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].clientY;
  handleSwipe();
});

function handleSwipe() {
  if (isScrolling) return;

  const swipeDistance = touchStartY - touchEndY;

  if (swipeDistance > 50) {
    scrollToSection(currentIndex + 1);
  } else if (swipeDistance < -50) {
    scrollToSection(currentIndex - 1);
  }
}






const enterLink = document.getElementById('enter-link');
const backgroundAudio = document.getElementById('background-audio');
const globalAudio = document.getElementById('global-audio');
const natureAudio = document.getElementById('nature-audio');
const personalAudio = document.getElementById('personal-audio');

let currentSectionAudio = null;
let currentAmbientAudio = null;

function fadeOutAndStop(audioElement) {
  if (!audioElement) return;

  let fadeOutInterval = setInterval(() => {
    if (audioElement.volume > 0.05) {
      audioElement.volume -= 0.05;
    } else {
      clearInterval(fadeOutInterval);
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.volume = 1;
    }
  }, 50);
}

function fadeIn(audioElement) {
  if (!audioElement) return;

  audioElement.volume = 0;
  audioElement.play().catch(e => console.error('Audio play error', e));

  let fadeInInterval = setInterval(() => {
    if (audioElement.volume < 0.95) {
      audioElement.volume += 0.05;
    } else {
      audioElement.volume = 1;
      clearInterval(fadeInInterval);
    }
  }, 50);
}

enterLink.addEventListener('click', function () {
  backgroundAudio.volume = 0.5;
  backgroundAudio.play().catch(e => console.error('Background audio error', e));
});

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  const sections = document.querySelectorAll('.section[data-audio]');

  let foundSection = null;
  let activeAmbient = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
      foundSection = section;
      const sectionClass = section.classList;

      if (sectionClass.contains('one') || sectionClass.contains('two') || sectionClass.contains('three')) {
        activeAmbient = globalAudio;
      } else if (sectionClass.contains('four') || sectionClass.contains('five') || sectionClass.contains('six')) {
        activeAmbient = natureAudio;
      } else if (sectionClass.contains('seven') || sectionClass.contains('eight') || sectionClass.contains('nine')) {
        activeAmbient = personalAudio;
      }
    }
  });

  // Ambient audio control
  if (activeAmbient !== currentAmbientAudio) {
    // Fade out current ambient audio
    if (currentAmbientAudio) {
      fadeOutAndStop(currentAmbientAudio);
    }

    if (activeAmbient) {
      fadeIn(activeAmbient);
    }

    currentAmbientAudio = activeAmbient;
  }

  // Section score audio control
  if (foundSection) {
    const audioSrc = foundSection.getAttribute('data-audio');

    if (!currentSectionAudio || currentSectionAudio.src.indexOf(audioSrc) === -1) {
      if (currentSectionAudio) {
        fadeOutAndStop(currentSectionAudio);
      }

      currentSectionAudio = new Audio(audioSrc);
      currentSectionAudio.volume = 0;
      currentSectionAudio.loop = true;
      currentSectionAudio.play().then(() => {
        fadeIn(currentSectionAudio);
      }).catch(e => console.error('Section audio error', e));
    }
  } else {
    if (currentSectionAudio) {
      fadeOutAndStop(currentSectionAudio);
      currentSectionAudio = null;
    }
  }
});