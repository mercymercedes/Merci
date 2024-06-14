// gallery-wall.js
document.addEventListener('DOMContentLoaded', () => {
    const artPieces = document.querySelectorAll('.art-piece');
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay-img');
    const description = document.getElementById('description');
    const closeBtn = document.querySelector('.close');

    artPieces.forEach(piece => {
        piece.addEventListener('click', () => {
            overlay.style.display = 'flex';
            overlayImg.src = piece.querySelector('img').src;
            description.textContent = piece.getAttribute('data-description');
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});
