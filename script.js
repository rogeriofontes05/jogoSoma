const valor1 = document.querySelector('#n1');
const valor2 = document.querySelector('#n2');

const msg1 = document.querySelector('.msg1');
const msg2 = document.querySelector('.msg2');
const msg3 = document.querySelector('.msg3');

const acertos = document.querySelector('.acertos');
const erros = document.querySelector('.erros');
const percentual = document.querySelector('.percentual');

let inputResposta = document.querySelector('.inputResposta');
inputResposta.focus();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function trocar() {
  let novoN1 = getRndInteger(0, 100);
  let novoN2 = getRndInteger(0, 100);
  valor1.innerHTML = novoN1;
  valor2.innerHTML = novoN2;
  return resultado = parseInt(novoN1) + parseInt(novoN2);
}
trocar();


function verificaNumero() {

  msg1.innerHTML = ``

  if (inputResposta.value == "") {
    msg1.innerHTML = `Digite um número!`
    msg2.innerHTML = ``
    msg3.innerHTML = ``
  } else if (inputResposta.value == resultado) {
    document.querySelector('.msg1').classList.remove("msg1Erro");
    msg1.innerHTML = `Você acertou! `
    msg2.innerHTML = `${valor1.innerHTML} + ${valor2.innerHTML}  = ${resultado}`
    msg3.innerHTML = ` `
    acertos.innerHTML++;
  } else {
    document.querySelector('.msg1').classList.add("msg1Erro");
    msg1.innerHTML = `Você errou! `
    msg2.innerHTML = `Você respondeu: ${inputResposta.value}`;
    msg3.innerHTML = `Resposta certa era: ${valor1.innerHTML} + ${valor2.innerHTML}  = ${resultado}`
    erros.innerHTML++;
  }

  function calPercentual(acertos, erros){
    if((acertos - erros)  != 0){
      return (acertos / (acertos + erros)*100).toFixed(2);
    }else{
      return 50;
    }
  }

  percentual.innerHTML = calPercentual(parseInt(acertos.innerHTML), parseInt(erros.innerHTML)) + ' %';
  trocar()
}

inputResposta.addEventListener("keyup", (e) => {
  if (e.keyCode == "13") {
    verificaNumero()
    inputResposta.value = '';
  }
})

const recarrega = document.querySelector('.recarrega');

function recarregar(){
  location.reload();
}
