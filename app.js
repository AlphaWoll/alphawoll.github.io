// JavaScript Document
//открытие на полный экран
const slider = document.querySelector('.slider');
const slides = Array.from(slider.querySelectorAll('img'));

function openFullscreenImage(element) {
  const fullscreenContainer = document.getElementById('fullscreen-container');
  const fullscreenImage = document.getElementById('fullscreen-image');

  fullscreenImage.src = element.src;
  fullscreenContainer.style.display = 'block';
}

function closeFullscreenImage() {
  const fullscreenContainer = document.getElementById('fullscreen-container');
  fullscreenContainer.style.display = 'none';
}