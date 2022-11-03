let mouseCursor = document.querySelector('.cursor');
let navLinks= document.querySelector('navlink a');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY +'px';
    mouseCursor.style.left = e.pageX +'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    });
});
