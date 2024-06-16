
function delayRedirect(event, url) {
    event.preventDefault(); 
    setTimeout(function() {
        window.location.href = url; 
    }, 1000); 
}


document.getElementById('minhaImagem').addEventListener('mouseover', function() {
    this.classList.add('imagem-com-brilho');
});

document.getElementById('minhaImagem').addEventListener('mouseout', function() {
    this.classList.remove('imagem-com-brilho');
});
