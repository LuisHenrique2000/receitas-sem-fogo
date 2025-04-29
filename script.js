// Script para funcionalidade Accordion (Sanfona) - Versão com Event Delegation

document.addEventListener("DOMContentLoaded", function() {

    const modulosContainer = document.querySelector(".modulos-container");

    if (!modulosContainer) {
        console.error("Container principal '.modulos-container' não encontrado!");
        return;
    }

    console.log("Script Accordion carregado.");

    modulosContainer.addEventListener("click", function(event) {
        console.log("Clique detectado em:", event.target);

        // Verifica se o clique foi no container do título do módulo
        const moduloTituloContainer = event.target.closest(".modulo-titulo-container");
        if (moduloTituloContainer) {
            console.log("Clique no container do título do módulo.");
            const listaAulas = moduloTituloContainer.nextElementSibling;
            const modulo = moduloTituloContainer.parentElement;

            if (listaAulas && listaAulas.classList.contains("aulas-lista")) {
                if (listaAulas.style.display === "none" || listaAulas.style.display === "") {
                    listaAulas.style.display = "block";
                    modulo.classList.add("aberto");
                    console.log("Módulo aberto:", modulo);
                } else {
                    listaAulas.style.display = "none";
                    modulo.classList.remove("aberto");
                    console.log("Módulo fechado:", modulo);
                }
            } else {
                console.warn("Elemento .aulas-lista não encontrado após o container do título.");
            }
            return; // Impede que o clique na aula seja processado também
        }

        // Verifica se o clique foi no título da aula
        const aulaTitulo = event.target.closest(".aula-titulo");
        if (aulaTitulo) {
            console.log("Clique no título da aula.");
            const conteudoAula = aulaTitulo.nextElementSibling;
            const aula = aulaTitulo.parentElement;

            if (conteudoAula && conteudoAula.classList.contains("aula-conteudo")) {
                if (conteudoAula.style.display === "none" || conteudoAula.style.display === "") {
                    conteudoAula.style.display = "block";
                    aula.classList.add("aberta");
                    console.log("Aula aberta:", aula);
                } else {
                    conteudoAula.style.display = "none";
                    aula.classList.remove("aberta");
                    console.log("Aula fechada:", aula);
                }
            } else {
                console.warn("Elemento .aula-conteudo não encontrado após o título da aula.");
            }
        }
    });

    // Adiciona cursor pointer via JS para garantir que seja aplicado
    document.querySelectorAll(".modulo-titulo-container, .aula-titulo").forEach(el => {
        el.style.cursor = "pointer";
    });
    console.log("Cursores 'pointer' aplicados.");

});
