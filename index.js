
function handleToolClick(tool) {
    alert(`You clicked on the ${tool} tool!`);
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});