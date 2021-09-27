const container = document.getElementById("container")

//divs que armazenam os blocos
const tower1 = document.createElement("div")
const tower2 = document.createElement("div")
const tower3 = document.createElement("div")

container.appendChild(tower1)
container.appendChild(tower2)
container.appendChild(tower3)

//blocos
const bloco1 = document.createElement("div")
const bloco2 = document.createElement("div")
const bloco3 = document.createElement("div")
const bloco4 = document.createElement("div")
tower1.appendChild(bloco1)
tower1.appendChild(bloco2)
tower1.appendChild(bloco3)
tower1.appendChild(bloco4)

//Adicionando classes as torres
tower1.classList.add('container__tower')
tower2.classList.add('container__tower')
tower3.classList.add('container__tower')

//Adicionando aos blocos
bloco1.classList.add('container__tower__bloco')
bloco2.classList.add('container__tower__bloco')
bloco3.classList.add('container__tower__bloco')
bloco4.classList.add('container__tower__bloco')


