// script menu-tendina
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
  
    menuIcon.addEventListener('click', function() {
      menu.classList.toggle('active'); //toggle lo utilizzo per evitare l'utilizzo degli if
    });
  });


  const images = [
    'https://cdn.shopify.com/s/files/1/0353/5929/3499/t/10/assets/foto1-1679992265853.jpg?v=1679992267',
    'https://cdn.shopify.com/s/files/1/0353/5929/3499/t/10/assets/foto2-1679992265856.jpg?v=1679992271',
    'https://cdn.shopify.com/s/files/1/0353/5929/3499/t/10/assets/foto3-1679992265858.jpg?v=1679992275',
    'https://cdn.shopify.com/s/files/1/0353/5929/3499/t/10/assets/foto4-1679992265860.jpg?v=1679992280',
    'https://cdn.shopify.com/s/files/1/0353/5929/3499/t/10/assets/foto5-1679992265862.jpg?v=1679992284',
    'https://cdn.shopify.com/s/files/1/0353/5929/3499/t/10/assets/foto6-1679992265864.jpg?v=1679992288',
    'https://cdn.shopify.com/s/files/1/0353/5929/3499/t/10/assets/foto7-1679992265866.jpg?v=1679992291',
    'https://cdn.shopify.com/s/files/1/0353/5929/3499/t/10/assets/foto8-1679992265867.jpg?v=1679992295',
    'https://cdn.shopify.com/s/files/1/0353/5929/3499/t/10/assets/foto9-1679992265869.jpg?v=1679992300'
];

let currentIndex = 0;

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const Back = document.getElementById('back');
const Next = document.getElementById('next');

function updateGallery() {
    image1.src = images[currentIndex];
    image2.src = images[currentIndex + 1];
    image3.src = images[currentIndex + 2];
    image4.src = images[currentIndex + 3];
    
    // Nascondi il pulsante "Back" quando siamo alla prima immagine
    if (currentIndex === 0) {
        Back.style.visibility = "hidden";
    } else {
        Back.style.visibility = "visible";
    }
    
    // Nascondi il pulsante "Next" quando siamo all'ultima immagine
    if (currentIndex >= images.length - 4) {
        Next.style.visibility = "hidden";
    } else {
        Next.style.visibility = "visible";
    }
}

Back.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
    
});

Next.addEventListener('click', () => {
    if (currentIndex < images.length - 4) {
        currentIndex++;
        updateGallery();
    }
});

updateGallery();


//script bottoni
const indicators = document.querySelectorAll('.indicator');

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    const index = parseInt(indicator.dataset.index);
    currentIndex = index;
    updateGallery();
  });
});

