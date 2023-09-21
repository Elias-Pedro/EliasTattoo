let scrollContainer = document.querySelector('.scroll-container');
let boxComentario = document.querySelector('.boxDepoimento')

function setaComentarios(direcao) {
    let tamanhoMoviX = boxComentario.offsetWidth + (boxComentario.offsetLeft*2)

    if(direcao == "direita"){
        for (let i = 0; i < tamanhoMoviX; i++) {
            setTimeout(() => {
                scrollContainer.scrollLeft++
            }, 100);
        }
    }
    
    if(direcao == "esquerda"){
        for (let i = 0; i < tamanhoMoviX; i++) {
            setTimeout(() => {
                scrollContainer.scrollLeft--
            }, 100);
        }
    }
}
