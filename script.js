const scomfort = document.querySelector('.scomfort')
const section = document.querySelector('.section1')
const tenis = document.querySelector('.tenis')
const nav = document.querySelector('.nav')
const loginButton = document.querySelector('.loginButton')


function efeito() {
    scrollar = pageYOffset
    scomfort.style.marginTop = `${scrollar * 0.04}px`
    scomfort.style.opacity = `${1 - scrollar * 0.001}`
    section.style.clipPath = `polygon(0% 0%, 100vw ${220 - scrollar * 0.2}px, 100vw 1900px, 0vw 1900px)`


    if (scrollar <= 780) {
        nav.style.backgroundColor = '';
    }if (scrollar >= 780 && scrollar <= 2160) {
        nav.style.backgroundColor = '#008ba7';
        nav.style.color = '';
        nav.style.border = '';
        loginButton.style.backgroundColor = '';
        loginButton.style.color = ''

    }if (scrollar >= 2160 && scrollar <= 3560) {
        nav.style.backgroundColor = 'white';
        nav.style.color = '#004E66';
        // nav.style.border = '#0989A2 solid 1px';
        loginButton.style.backgroundColor = '#004E66';
        loginButton.style.color = 'white';
    }if (scrollar >= 3560 && scrollar <= 5150) {
        nav.style.backgroundColor = 'rgb(246, 246, 246)';
        nav.style.border = '';
    }if (scrollar >= 5150) {
        nav.style.backgroundColor = 'white';
    }

}

window.addEventListener('scroll', efeito);