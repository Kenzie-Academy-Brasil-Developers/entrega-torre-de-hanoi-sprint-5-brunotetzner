const container = document.getElementById("container")

const submitinput = document.getElementById('submit') //selecionando botão de enviar

//divs que armazenam os blocos
const tower1 = document.createElement("div")
const tower2 = document.createElement("div")
const tower3 = document.createElement("div")

container.appendChild(tower1)
container.appendChild(tower2)
container.appendChild(tower3)


//Criando blocos com loop
let width = 100
const difficult = [3,4,5,6]
function reset() {
    tower1.innerHTML = ""
    width = 100
}

submitinput.addEventListener("click", function (e) {

    const myinput = document.getElementById('dificult') //pegando input

    const numberofblocks = myinput.value
    console.log(numberofblocks)

    if(myinput.value < 3 || myinput.value > 6) {
            console.log("O valor digitado não é um número válido (Entre 3 e 6)")
    } else {
        reset()
    const colors = ["#110030", "#2d1e55", "#4f387d", "#7454a6", "#9b71d2", "#c490ff"]

    for (let i = 0; i < numberofblocks; i++) {
        let bloco = document.createElement('div')
        bloco.classList.add('container__tower__bloco')

        bloco.style.width = `${width}%`;
        console.log(`${width}%`)
        bloco.style.backgroundColor = `${colors[i]}`
        tower1.appendChild(bloco)
        width = width - 15
        //Criar todas os blocos
        //Adicionar como filhas da torre 1
        //criar um tamanho para cada uma delas
        //Criar uma função que escolha as cores
    }}
})

tower1.classList.add("container__tower")
tower2.classList.add("container__tower")
tower3.classList.add("container__tower")

const resetButton = document.querySelector(".buttons_reset")
resetButton.innerText = "Reiniciar Jogo"
resetButton.addEventListener("click", reset)



/*----------------------------------------------*/



//blocos

// const bloco1 = document.createElement("div")
// const bloco2 = document.createElement("div")
// const bloco3 = document.createElement("div")
// const bloco4 = document.createElement("div")

/* tower1.appendChild(bloco1)
tower1.appendChild(bloco2)
tower1.appendChild(bloco3)
tower1.appendChild(bloco4)
*/

/*Adicionando o width aos containers

bloco1.style.width = '65%';
bloco2.style.width = '50%';
bloco3.style.width = '35%';
bloco4.style.width = '20%';
*/

/* Adicionando cores aos blocos
bloco1.style.backgroundColor = "#4f387d"
bloco2.style.backgroundColor = "#7454a6"
bloco3.style.backgroundColor = "#9b71d2"
bloco4.style.backgroundColor = "#c490ff"
*/



/*Adicionando classe aos blocos
bloco1.classList.add('container__tower__bloco')
bloco2.classList.add('container__tower__bloco')
bloco3.classList.add('container__tower__bloco')
bloco4.classList.add('container__tower__bloco')*/

//Adicionando click

let firstBlock
let firstClick = true
let counter = 0


function clickState(e) {
    if (firstClick === true) {
        firstBlock = e.currentTarget.lastChild
        firstClick = false
    } else {
        if (e.currentTarget.lastChild === null || firstBlock.clientWidth < e.currentTarget.lastChild.clientWidth) {
            e.currentTarget.appendChild(firstBlock)
            firstClick = true
            counter += 1
            console.log(counter)
        }
    }
}

const towers = document.querySelectorAll(".container__tower")
for (i = 0; i < towers.length; i++) {
    towers[i].addEventListener("click", clickState)
}