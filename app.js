let valor = document.getElementById('valor')
let unidade = document.getElementById('unidade')
let produto = document.getElementById('produto')
let receber = document.getElementById('card-pai')

let arrayCompras = []

function atualizar() { 
    arrayCompras.push(Number(valor.value * unidade.value))

    let newProduto = document.createElement('div')

    let div = document.createElement('div')
    div.classList.add('cardFilho')
    div.textContent += `Descrição: ${produto.value}`

    div.innerHTML += `Valor: ${baseCalculo(Number(valor.value), Number(unidade.value)).toFixed(2)}`

    div.appendChild(newProduto)

    receber.appendChild(div)

    valor.value = ''
    unidade.value = ''
    produto.value = ''

    somar()
}

function baseCalculo(a, b) {
    return a * b
}


function somar() {
    let receberSoma = document.getElementById('soma')
    let sum = arrayCompras.reduce((valorAcumulado, numeros) => valorAcumulado + numeros, 0)

    receberSoma.innerHTML = `R$: ${sum.toFixed(2)}`

    console.log(sum)
    
}

somar()
