//Busca no HTML o elemento que armazenará as torres
const container = document.getElementById("container")

//Busca no HTML o botão de selecionar a dificuldade
const submitinput = document.getElementById('submit')
//Busca no HTML o contador de movimentos
const containerCount = document.querySelector('.counter')

//Criação das 3 torres

const tower1 = document.createElement("div")
const tower2 = document.createElement("div")
const tower3 = document.createElement("div")

//Armazena todas as torres em um array
const towers = [tower1, tower2, tower3]
//Inicia um loop para percorrer todas as torres armazenadas
for (i = 0; i < towers.length; i++) {
    //Insere no HTML a torre da posição atual
    container.appendChild(towers[i])
    //Insere uma classe à torre da posição atual
    towers[i].classList.add("container__tower")
    //Adiciona as funções de click na torre
    towers[i].addEventListener("click", clickState)
}

//Inicia a variável do comprimento inicial dos discos
let width = 100
//Inicia a variável do contador de movimentos
let counter = 0
//Inicia a variável que guarda os níveis de dificuldade aceitos. 
const difficult = [3, 4, 5, 6]

//Criação da função de reset
function reset() {
    //Reseta a primeira torre
    tower1.innerHTML = ""
    //Reseta a segunda torre
    tower2.innerHTML = ""
    //Reseta a terceira torre
    tower3.innerHTML = ""
    //Reseta o contador
    containerCount.innerHTML = ""
    counter = 0;
    //Reseta o comprimento dos discos para o valor inicial
    width = 100
}
//Define a quantidade de blocos inicial como 0
let numberofblocks = 0;

//Criação do seletor de dificuldade
submitinput.addEventListener("click", function (e) {
    //Busca no HTML a caixa que contém a dificuldade selecionada pelo usuário
    const myinput = document.getElementById('dificult')
    //Define a quantidade de blocos a serem jogados com o valor escolhido pelo usuário
    numberofblocks = Number(myinput.value)

    //Verica se o valor escolhido pelo jogador é válido ou não
    if (myinput.value < 3 || myinput.value > 6) {

        // const errorMensage = document.createElement('p')
        // errorMensage.classList.add('counter__error')
        // containerCount.appendChild(errorMensage)
        // errorMensage.innerHTML = "O valor digitado não é um número válido"

        //Cria um elemento para exibir a mensagem de número inválido
        const errorMessage = document.createElement('p')
        //Adiciona uma classe à mensagem de erro
        errorMessage.classList.add('counter__error')
        //Insere a mensagem de erro no HTML
        containerCount.appendChild(errorMessage)
        //Define o conteúdo da mensagem de erro
        errorMessage.innerText = "O valor digitado não é um número válido (Entre 3 e 6)"


    } else {
        //Chama a função de reset, para resetar o jogo ao escolher uma nova dificuldade
        reset()
        //Criação de um array para armazenar as cores dos blocos(discos)
        const colors = ["#110030", "#2d1e55", "#4f387d", "#7454a6", "#9b71d2", "#c490ff"]

        //Loop de criação dos blocos
        for (let i = 0; i < numberofblocks; i++) {
            //Cria um elemento que será o bloco
            let bloco = document.createElement('div')
            //Adiciona uma classe ao elemento recém criado
            bloco.classList.add('container__tower__bloco')
            //Define o comprimento do bloco
            bloco.style.width = `${width}%`;
            //Define um cursor pointer para os blocos.
            bloco.style.cursor = "pointer";
            //Diminui o valor do comprimento para o próximo bloco, caso seja criado
            width = width - 15
            //Define a cor de fundo do bloco
            bloco.style.backgroundColor = `${colors[i]}`
            //Adiciona o bloco na torre 1
            tower1.appendChild(bloco)
        }
    }
})
//Busca no HTML o botão de reset
const resetButton = document.querySelector(".buttons_reset")
//Define o texto do botão de reset
resetButton.innerText = "Reiniciar Jogo"
//Chama a função de reset ao clicar no botão
resetButton.addEventListener("click", reset)

//Inicia a variável que irá armazenar o bloco que eu selecionar para mover
let firstBlock
//Inicia minha variável que define se é o primeiro ou segundo click
let firstClick = true

//Criação da função do Click 1 e Click 2
function clickState(e) {
    //Verifica se é o primeiro click ou não
    if (firstClick === true) {
        container.style.cursor = "pointer";
        //Verifica se o primeiro click é em uma torre vazia ou não 
        if (e.currentTarget.childElementCount === 0) {
            //Se a torre estiver vazia no primeiro click, mantém o status de 1ª click.
            firstClick = true
        } else {
            //Se a torre não estiver vazia no primeiro click, armazena o bloco de cima em uma variável
            firstBlock = e.currentTarget.lastChild
            //Define o status do jogo para 2ª click.
            firstClick = false
        }
    } else {
        container.style.cursor = "default";
        //Se for o segundo click, verifica se o movimento é válido
        if (e.currentTarget.lastChild === null || firstBlock.clientWidth < e.currentTarget.lastChild.clientWidth) {
            //Se o movimento for válido, troca de torre o bloco selecionado no primeiro click
            e.currentTarget.appendChild(firstBlock)
            //Volta o status do jogo para o início (1ª click)
            firstClick = true
            //Acrescenta 1 no contador de movimentos. 1 movimento = 2 clicks, ou melhor, uma jogada válida, que pode ter mais clicks.
            counter += 1
            //Chama a função de status do jogo
            victoryMessage()
        } else {
            //Se o movimento não for válido, volta para o status de 1ª click, e não contabiliza um movimento
            firstClick = true
            //Chama a função de status do jogo
            victoryMessage()
        }
    }
}


//Busca no html o elemento no qual será aplicada a mensagem de vitória
const victoryBox = document.querySelector(".status_message")

//Criação da função da condição de vitória e do status atual do jogo
function victoryMessage() {

    //Verifica se todos os blocos se encontram na torre 2 ou 3. O jogo pode ser ganho tanto em uma torre quanto na outra

    if (tower3.childElementCount === numberofblocks || tower2.childElementCount === numberofblocks) {
        containerCount.appendChild(victoryBox)
        //Criando o elemento que guardará a mensagem de vitória
        const victoryText = document.createElement('p')
        //Limpando victoryBox para deixar somente a mensagem de vitória
        victoryBox.innerHTML = ""
        //Criando mensagem de vitória
        victoryText.classList.add("victoryText")
        victoryText.innerText = `Você venceu com ${counter} movimentos!`
        //Anexando mensagem de vitória no html
        victoryBox.appendChild(victoryText)

        //função que calcula o numero de jogadas
        let MinJogadas = Math.pow(2, numberofblocks) - 1

        //Criaçao das estrelas de acordo com a eficácia da resolução
        if (counter === MinJogadas) {
            //tres estrelas
            for (let i = 0; i < 3; i++) {
                const newStar1 = document.createElement('i')
                newStar1.classList.add('fas')
                newStar1.classList.add('fa-star')
                newStar1.style.color = 'yellow'
                containerCount.appendChild(newStar1)

            }

        } else if (counter <= (MinJogadas + 4)) {
            //Duas estrelas
            for (let i = 0; i < 2; i++) {
                const newStar1 = document.createElement('i')
                newStar1.classList.add('fas')
                newStar1.classList.add('fa-star')
                newStar1.style.color = 'yellow'
                containerCount.appendChild(newStar1)

            }
            const newStar = document.createElement('i')
            newStar.classList.add('far')
            newStar.classList.add('fa-star')
            newStar.style.color = 'gray'
            containerCount.appendChild(newStar)
        } else if (counter > (MinJogadas + 4)) {
            //Uma estrela
            const newStar = document.createElement('i')
            newStar.classList.add('fas')
            newStar.classList.add('fa-star')
            newStar.style.color = 'yellow'
            containerCount.appendChild(newStar)

            for (let i = 0; i < 2; i++) {
                const newStar1 = document.createElement('i')
                newStar1.classList.add('far')
                newStar1.classList.add('fa-star')
                newStar1.style.color = 'gray'
                containerCount.appendChild(newStar1)

            }

        }
    } else {
        containerCount.appendChild(victoryBox)
        //Se ainda não foi atingido a condição de vitória, atualiza o status atual do jogo.
        victoryBox.innerText = `Jogo em andamento. \n Movimentos válidos: ${counter}`
    }
}