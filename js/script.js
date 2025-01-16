document.getElementById('get-started').addEventListener('click', function() {
    alert('Thank you for your interest! Please sign up or log in to get started.');
});

const hamburger = document.getElementById('hamburger');
const offcanvas = document.getElementById('offcanvas');

hamburger.addEventListener('click', () => {
    offcanvas.classList.toggle('show');
});