/*======== Sticky Navbar ========*/
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});





/*======== Responsive Navbar ========*/
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};





/*======== Scroll Animation ========*/
const sr = ScrollReveal ({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.hero_text', {delay:190, origin:'bottom'})

sr.reveal('.portfolio', {delay:200, origin:'bottom'})

sr.reveal('.about,.services,.contact,.resume,.ui,.web,.graphic', {delay:200, origin:'bottom'})





/*======== Typed js ========*/
const typed = new Typed('.multiple_text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Graphic Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1500,
    loop: true
});





/*======== Active Navbar 
$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
}) ========*/
