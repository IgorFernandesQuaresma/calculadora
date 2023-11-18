const num01 = document.querySelector('.num01').value;
var valorNum01 = parseFloat(num01)


const num02 = document.querySelector('.num02').value
var valorNum02 = parseFloat(num02)


const btnSomar = document.querySelector('.btnSomar')
const btnSubtrair = document.querySelector('.btnSubtrair')
const btnMultiplicar = document.querySelector('.btnMultiplicar')
const btnDividir = document.querySelector('.btnDividir')

const resultado = document.querySelector('.resultado')
resultado.textContent = 'O resultado aparecera aqui'


btnSomar.addEventListener('click', () => {
    const num01 = document.querySelector('.num01').value;
    var valorNum01 = parseFloat(num01)
    const num02 = document.querySelector('.num02').value
    var valorNum02 = parseFloat(num02)

    const soma = valorNum01 + valorNum02

    resultado.textContent = `
    O seu resultado é ${soma}
    `

})

btnSubtrair.addEventListener('click', () => {

    const num01 = document.querySelector('.num01').value;
    var valorNum01 = parseFloat(num01)
    const num02 = document.querySelector('.num02').value
    var valorNum02 = parseFloat(num02)

    const subtracao = valorNum01 - valorNum02

    resultado.textContent = `
    O seu resultado é ${subtracao}
    `

})


btnMultiplicar.addEventListener('click', () => {


    const num01 = document.querySelector('.num01').value;
    var valorNum01 = parseFloat(num01)
    const num02 = document.querySelector('.num02').value
    var valorNum02 = parseFloat(num02)

    const multiplicacao = valorNum01 * valorNum02

    resultado.textContent = `
    O seu resultado é ${multiplicacao}
    `

})


btnDividir.addEventListener('click', () => {

    const num01 = document.querySelector('.num01').value;
    var valorNum01 = parseFloat(num01)
    const num02 = document.querySelector('.num02').value
    var valorNum02 = parseFloat(num02)
    const divisao = valorNum01 / valorNum02

    resultado.textContent = `
    O seu resultado é ${divisao}
    `

})
