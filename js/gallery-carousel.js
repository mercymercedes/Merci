// gallery-carousel.js

let currentIndex = 0;
const artworks = [
    {
        src: "images/gallery-images/artwork-1.png",
        description: "Duafe: Mixed media collage inspired by akan symbol, 2024"
    },
    {
        src: "images/gallery-images/artwork-2.png",
        description: "Independence: 6th of March 1957 Dr. Kwame Nkrumah, 2022"
    },
    {
        src: "images/gallery-images/artwork-3.png",
        description: "Fante Women: Fante Society is matrilinar, 2023"
    },
    {
        src: "images/gallery-images/artwork-4.png",
        description: "Mmoatia: fairy like dwarf creatures in Akan mythology, 2022"
    },
    {
        src: "images/gallery-images/artwork-5.png",
        description: "Creaving nature:visit to Ghana, 2023"
    }
];

function updateGallery() {
    const leftIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    const rightIndex = (currentIndex + 1) % artworks.length;

    document.getElementById('center-art').src = artworks[currentIndex].src;
    document.getElementById('center-art').nextElementSibling.innerHTML = artworks[currentIndex].description;

    document.getElementById('left-art').src = artworks[leftIndex].src;
    document.getElementById('left-art').nextElementSibling.innerHTML = artworks[leftIndex].description;

    document.getElementById('right-art').src = artworks[rightIndex].src;
    document.getElementById('right-art').nextElementSibling.innerHTML = artworks[rightIndex].description;

    // Apply the correct classes for scaling and description visibility
    document.getElementById('left-art').parentNode.classList.remove('large-frame');
    document.getElementById('left-art').parentNode.classList.add('small-frame');
    document.getElementById('right-art').parentNode.classList.remove('large-frame');
    document.getElementById('right-art').parentNode.classList.add('small-frame');
    document.getElementById('center-art').parentNode.classList.remove('small-frame');
    document.getElementById('center-art').parentNode.classList.add('large-frame');
}

function prevArtwork() {
    currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    updateGallery();
}

function nextArtwork() {
    currentIndex = (currentIndex + 1) % artworks.length;
    updateGallery();
}

document.addEventListener('DOMContentLoaded', updateGallery);
