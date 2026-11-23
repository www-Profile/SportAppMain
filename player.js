'use strict';

const video = document.getElementById('intro-video');
const mobileScreen = window.matchMedia('(max-width: 600px)');

function updatePoster() {
  video.poster = mobileScreen.matches
    ? 'assets/poster-portrait.webp'
    : 'assets/poster-wide.webp';
}

updatePoster();
mobileScreen.addEventListener('change', updatePoster);