const container = document.getElementById("container")
const submitinput = document.getElementById('submit') //selecionando botão de enviar
const containerCount = document.querySelector('.counter') //Mostra o resu
//divs que armazenam os blocos
const tower1 = document.createElement("div")
const tower2 = document.createElement("div")
const tower3 = document.createElement("div")
container.appendChild(tower1)
container.appendChild(tower2)
container.appendChild(tower3)


//função de reset
let width = 100
let counter = 0 // Guarda o numero de jogadas da partida 
const difficult = [3, 4, 5, 6]

function reset() {
    tower1.innerHTML = ""
    tower2.innerHTML = ""
    tower3.innerHTML = ""
    containerCount.innerHTML = ""
    counter = 0;
    width = 100
}
/*------criando blocos com um loop-----------*/
let numberofblocks = 0;

submitinput.addEventListener("click", function (e) {
    const myinput = document.getElementById('dificult') //pegando input
    numberofblocks = Number(myinput.value)

    if (myinput.value < 3 || myinput.value > 6) {
        const errorMensage = document.createElement('p')
        errorMensage.classList.add('counter__error')
        containerCount.appendChild(errorMensage)
        errorMensage.innerHTML = "O valor digitado não é um número válido"
    } else {
        reset()
        const colors = ["#110030", "#2d1e55", "#4f387d", "#7454a6", "#9b71d2", "#c490ff"]

        for (let i = 0; i < numberofblocks; i++) {
            let bloco = document.createElement('div')
            bloco.classList.add('container__tower__bloco')

            bloco.style.width = `${width}%`;
            bloco.style.backgroundColor = `${colors[i]}`
            tower1.appendChild(bloco)
            width = width - 15
        }
    }
})

tower1.classList.add("container__tower")
tower2.classList.add("container__tower")
tower3.classList.add("container__tower")

const resetButton = document.querySelector(".buttons_reset")
resetButton.innerText = "Reiniciar Jogo"
resetButton.addEventListener("click", reset)

//Adicionando click
let firstBlock
let firstClick = true


function clickState(e) {
    if (firstClick === true) {
        if (e.currentTarget.childElementCount === 0) {
            firstClick = true
        } else {
            firstBlock = e.currentTarget.lastChild
            firstClick = false
        }
    } else {
        if (e.currentTarget.lastChild === null || firstBlock.clientWidth < e.currentTarget.lastChild.clientWidth) {
            e.currentTarget.appendChild(firstBlock)
            firstClick = true
            counter += 1
            victoryMessage()
        } else {
            firstClick = true
            victoryMessage()
        }
    }
}
const towers = document.getElementsByClassName("container__tower")
for (i = 0; i < towers.length; i++) {
    towers[i].addEventListener("click", clickState)
}

/*Adicionando click*/
const victoryBox = document.querySelector(".status_message h3")

function victoryMessage() {

    let victoryCount = parseInt(numberofblocks, 10)
    if (tower3.childElementCount === victoryCount || tower2.childElementCount === victoryCount) {
        containerCount.appendChild(victoryBox)

        const victoryText = document.createElement('p')
        victoryBox.innerHTML = "" //Limpando victoryBox para deixar somente a mensagem de vitória
        //Criando mensagem de vitória
        victoryText.classList.add("victoryText")
        victoryText.innerText = `Você venceu com ${counter} movimentos!`
        victoryBox.appendChild(victoryText)

    } else {
        victoryBox.innerText = `Jogo em andamento. \n Movimentos válidos: ${counter}`
    }
}