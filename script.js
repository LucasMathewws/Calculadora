const visor = document.querySelector('#visor');
const botoesNumero = document.querySelectorAll('.numero');

botoesNumero.forEach(function(botao) {
    botao.addEventListener('click', function(){
        const digito = botao.textContent;
        
        if (visor.textContent === '0'){
            visor.textContent = digito;
        } else {
            visor.textContent += digito
        }
    });    
});