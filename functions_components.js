function loadRodape() {
    fetch('../components/rodape.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

function loadHeader(path = 'pages') {
    fetch('../components/header.html')
        .then(response => response.text())
        .then(data => {
            const headerhtml = data.replace(/<path>/g, path); /*Gambiarra para pegar o path dos navigates */
            document.body.insertAdjacentHTML('afterbegin', headerhtml);
        })
        .catch(error => console.error('Error loading header:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        loop: true, // Loop infinito dos slides
        navigation: { // Botões de navegação
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
        },
        pagination: { // Paginação
        el: '.swiper-pagination',
        clickable: true
        },
        autoplay: { // Auto play dos slides
        delay: 3000
        }
    });
});