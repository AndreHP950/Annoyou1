let $botaoJogo = $('.noselect');
localStorage.setItem('fase', '0');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const mainEl = document.querySelector('main');

$botaoJogo.click(function faseUm() {
    removeAllChildNodes(mainEl);

    localStorage.setItem('fase', '1');

    for (let i = 0; i < 20; i++) {
        let botaoEl = document.createElement('button');
        botaoEl.classList.add('noselect');

        let divButtons = document.createElement('div');

        divButtons.style.padding = '2em';
        divButtons.classList.add('centralizado');

        mainEl.appendChild(divButtons);

        divButtons.appendChild(botaoEl);

        if (i === 16) {
            botaoEl.addEventListener('click', function passaDaFaseUm() {
                removeAllChildNodes(mainEl);
            })
        } else {
            botaoEl.addEventListener('click', function botaoErrado() {
                alert('Você clicou no botão errado!!!');
            });
        }
    }

});