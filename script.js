const menuToggle = document.querySelector(".menuToggle");
const closeBut = document.querySelector(".bx-x");
const chatBox = document.querySelector('.chat-container');

menuToggle.addEventListener('click',()=> {
    menuToggle.classList.toggle('active');
    
})

closeBut.addEventListener('click',() => {
    menuToggle.classList.toggle('active')
})