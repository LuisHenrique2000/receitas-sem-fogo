// Script para funcionalidade Accordion (Sanfona)

document.addEventListener("DOMContentLoaded", function() {

    // Accordion para Módulos
    // Seleciona o container que envolve a imagem e o título do módulo
    const modulosTituloContainers = document.querySelectorAll(".modulo-titulo-container");

    modulosTituloContainers.forEach(container => {
        container.style.cursor = "pointer"; // Adiciona cursor de clique ao container
        container.addEventListener("click", () => {
            // A lista de aulas é o próximo irmão do container do título
            const listaAulas = container.nextElementSibling;
            // O módulo principal é o pai do container do título
            const modulo = container.parentElement;

            if (listaAulas && listaAulas.classList.contains("aulas-lista")) {
                if (listaAulas.style.display === "none" || listaAulas.style.display === "") {
                    listaAulas.style.display = "block";
                    modulo.classList.add("aberto"); // Adiciona classe ao .modulo
                } else {
                    listaAulas.style.display = "none";
                    modulo.classList.remove("aberto");
                }
            }
        });
    });

    // Accordion para Aulas (Mantido como estava, pois a estrutura HTML é diferente)
    const aulasTitulos = document.querySelectorAll(".aula-titulo");

    aulasTitulos.forEach(titulo => {
        titulo.style.cursor = "pointer"; // Adiciona cursor de clique ao título da aula
        titulo.addEventListener("click", () => {
            const conteudoAula = titulo.nextElementSibling; // Pega a div .aula-conteudo
            const aula = titulo.parentElement; // Pega a div .aula

            if (conteudoAula && conteudoAula.classList.contains("aula-conteudo")) {
                if (conteudoAula.style.display === "none" || conteudoAula.style.display === "") {
                    conteudoAula.style.display = "block";
                    aula.classList.add("aberta"); // Adiciona classe para estilização opcional
                } else {
                    conteudoAula.style.display = "none";
                    aula.classList.remove("aberta");
                }
            }
        });
    });

});
