const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')
const cross = document.getElementsByClassName('cross')
const ul = document.querySelectorAll('ul')
function ach(){
    menu.style.right = '0'
}
function bagla(){
    menu.style.right = '-80%'
}

function tab(menuId) {
    const tooglemenu = document.getElementById(menuId);
    if (tooglemenu.style.display === 'none' || tooglemenu.style.display === '') {
        tooglemenu.style.display = 'block';
    } else {
        tooglemenu.style.display = 'none';
    }
}