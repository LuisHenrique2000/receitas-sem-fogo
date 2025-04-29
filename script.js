// Script para funcionalidade Accordion (Sanfona)

document.addEventListener('DOMContentLoaded', function() {

    // Accordion para Módulos
    const modulosTitulos = document.querySelectorAll('.modulo-titulo');

    modulosTitulos.forEach(titulo => {
        titulo.style.cursor = 'pointer'; // Adiciona cursor de clique
        titulo.addEventListener('click', () => {
            const listaAulas = titulo.nextElementSibling; // Pega a div .aulas-lista
            const modulo = titulo.parentElement; // Pega a div .modulo

            if (listaAulas && listaAulas.classList.contains('aulas-lista')) {
                if (listaAulas.style.display === 'none' || listaAulas.style.display === '') {
                    listaAulas.style.display = 'block';
                    modulo.classList.add('aberto'); // Adiciona classe para estilização opcional
                } else {
                    listaAulas.style.display = 'none';
                    modulo.classList.remove('aberto');
                }
            }
        });
    });

    // Accordion para Aulas
    const aulasTitulos = document.querySelectorAll('.aula-titulo');

    aulasTitulos.forEach(titulo => {
        titulo.style.cursor = 'pointer'; // Adiciona cursor de clique
        titulo.addEventListener('click', () => {
            const conteudoAula = titulo.nextElementSibling; // Pega a div .aula-conteudo
            const aula = titulo.parentElement; // Pega a div .aula

            if (conteudoAula && conteudoAula.classList.contains('aula-conteudo')) {
                if (conteudoAula.style.display === 'none' || conteudoAula.style.display === '') {
                    conteudoAula.style.display = 'block';
                    aula.classList.add('aberta'); // Adiciona classe para estilização opcional
                } else {
                    conteudoAula.style.display = 'none';
                    aula.classList.remove('aberta');
                }
            }
        });
    });

});
