document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: { delay: 3000 }, // Cambia cada 3 segundos
        allowTouchMove: false, // Desactiva control manual
        keyboard: false,
        navigation: false,
        pagination: false,
    });
});