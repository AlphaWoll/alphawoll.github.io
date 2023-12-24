function onEntry(entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add('show');
        } else{
        change.target.classList.remove('show');
        }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim');
for (let elm of elements){
    observer.observe(elm);
}
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
