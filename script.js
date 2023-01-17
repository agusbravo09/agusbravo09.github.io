document.getElementById('telefono').onclick = function () {
    document.getElementById('texto-informacion').innerHTML = "(433) 293-1385";
}

document.getElementById('torta').onclick = function () {
    document.getElementById('texto-informacion').innerHTML = "08 de Febrero de 1998";
}

document.getElementById('gps').onclick = function () {
    document.getElementById('texto-informacion').innerHTML = "3892 Crockett St.";
}

document.getElementById('correo').onclick = function () {
    document.getElementById('texto-informacion').innerHTML = "mike_welch@example.com";
}

document.getElementById('submit-button').onclick = function () {
    document.getElementById('submit-p').innerHTML = "Gracias! Estare leyendo a la brevedad ;)";
}

const header = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.classList.add('nav-scroll');
    }
    else{
        header.classList.remove('nav-scroll');
    }
});

ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400
})
ScrollReveal().reveal('.text-inicio, .perfil, .title-exp, .programacion', {delay: 400, origin: 'left'});
ScrollReveal().reveal('.img-inicio, .text-about, .card-3, .idiomas, .form', {delay: 500, origin: 'right'});
ScrollReveal().reveal('.front, .card-2, .proyectos-title, .more-info', {delay: 500, origin: 'top'});
ScrollReveal().reveal('.calidad, .card-1', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.disenio, .title-job, .social', {delay: 500, origin: 'bottom'});