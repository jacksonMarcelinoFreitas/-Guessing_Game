//variáveis
const screen2 = document.querySelector(".screen2")
const screen1 = document.querySelector(".screen1")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const ramdomNumber = Math.round(Math.random() * 10)
console.log(`O valor gerado é ${ramdomNumber}`)
let xAttemps = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//funcoes
function handleTryClick(event){
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == ramdomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `acertou em ${xAttemps} tentativas!`
    }

    inputNumber.value = "" 
    xAttemps++
}

function handleResetClick(){
    toggleScreen()
    xAttemps = 1
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
