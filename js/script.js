soma = geraOperacao()

function geraOperacao() {
    let num1 = Math.floor(Math.random() * 20);
    let num2 = Math.floor(Math.random() * 20);

    let operacao = document.getElementById('conta');

    operacao.innerHTML = num1 + ' + ' + num2;

    let soma = num1 + num2;
    return soma;
}

var botao = document.getElementsByName('enviar');

let resultado = document.getElementById('resultado').value;

if (resultado == soma) {
    botao.addEventListener('click', function () {
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var cidade = document.getElementById('cidade').value;
        console.log(getRadioValue('opicao'));
    });
}

function getRadioValue(valor) {
    let name = document.getElementsByName(valor);

    for (let i = 0; i < name.length; i++) {
        if (name[i].checked) {
            return name[i].value;
        }
    }
    return null;
}