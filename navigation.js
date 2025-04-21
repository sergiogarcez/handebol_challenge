document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const content = document.getElementById('content'); // Div onde o conteúdo será carregado

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const url = event.target.getAttribute('href');

            fetch(url)
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                })
                .catch(error => console.error('Erro ao carregar a página:', error));
        });
    });
});