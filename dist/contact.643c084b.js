const searchForm = document.querySelector('.search-form');
const cart = document.querySelector('.shopping-cart');
const loginForm = document.querySelector('.login-form');
const navbar = document.querySelector('.navbar');
const slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;
document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};
document.querySelector('#cart-btn').onclick = ()=>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};
document.querySelector('#login-btn').onclick = ()=>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
};
document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
};
window.onscroll = ()=>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};
// eslint-disable-next-line no-unused-vars
function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
// eslint-disable-next-line no-unused-vars
function prevSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

//# sourceMappingURL=contact.643c084b.js.map
