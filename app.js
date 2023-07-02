let valor = document.getElementById('valor')
let unidade = document.getElementById('unidade')
let produto = document.getElementById('produto')
let receber = document.getElementById('card-pai')

let dadosDescricao = document.querySelectorAll('.dadosDescricao')
let dadosMenu =document.getElementById('dadosTable')

let arrayCompras = []

function atualizar() { 

        arrayCompras.push(Number(valor.value * unidade.value))

        let newTr = document.createElement('tr')
        newTr.classList.add('dadosMenu')

        let newTdDescricao = document.createElement('td')
        newTdDescricao.classList.add('dadosDescricao')
        newTdDescricao.textContent =  produto.value
        let dadosUnidades = document.createElement('td')
        dadosUnidades.classList.add('dadosUnidades')
        dadosUnidades.textContent = unidade.value
        let dadosValor = document.createElement('td')
        dadosValor.classList.add('dadosValor')
        dadosValor.textContent = valor.value

        let statusBtn = document.createElement('button')
        statusBtn.classList.add('dadosBtnExluir')
        statusBtn.textContent = 'Excluir'

        newTr.appendChild(newTdDescricao)
        newTr.appendChild(dadosUnidades)
        newTr.appendChild(dadosValor)
        newTr.appendChild(statusBtn)

        dadosMenu.appendChild(newTr)

        statusBtn.addEventListener('click', () => {
            let elementoClicado = event.target
            
            if(elementoClicado.classList.contains('dadosBtnExluir')) {
                let linha = elementoClicado.closest('tr')
                linha.remove()
            }

        })

        valor.value = ''
        unidade.value = ''
        produto.value = ''

        somar()
        calcular()
}

function baseCalculo(a, b) {
    return a * b
}

function somar() {
    let receberSoma = document.getElementById('soma')
    let sum = arrayCompras.reduce((valorAcumulado, numeros) => valorAcumulado + numeros, 0)

    receberSoma.innerHTML = `${sum.toFixed(2)}`

    return Number(sum.toFixed(2))
}

let myMoney = document.getElementById('myMoney')
let saldoMoney = document.getElementById('saldoMoney') 
function mySaldo () {
    saldoMoney.innerHTML = `${Number(myMoney.value).toFixed(2)}`
    myMoney.value = ''
    calcular()
}

function calcular() {
    let valor1 = Number(document.getElementById('saldoMoney').textContent);
    let valor2 = Number(document.getElementById('soma').textContent);
  
    let resultado = valor1 - valor2;
  
    document.getElementById('resultado').textContent = `${resultado.toFixed(2)}`;

}


