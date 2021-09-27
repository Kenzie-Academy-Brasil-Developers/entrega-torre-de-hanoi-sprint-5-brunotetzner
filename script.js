const container = document.getElementById("container")

//divs que armazenam os blocos
const tower1 = document.createElement("div")
tower1.classList.add("container__towers")

const tower2 = document.createElement("div")
tower2.classList.add("container__towers")

const tower3 = document.createElement("div")
tower3.classList.add("container__towers")

container.appendChild(tower1)
container.appendChild(tower2)
container.appendChild(tower3)

//blocos
const bloco1 = document.createElement("div")
    bloco1.classList.add("container__discs--format")
    bloco1.style.width = "25%"
    bloco1.style.backgroundColor = "#c490ff"

const bloco2 = document.createElement("div")
    bloco2.classList.add("container__discs--format")
    bloco2.style.width = "40%"
    bloco2.style.backgroundColor = "#9b71d2"

const bloco3 = document.createElement("div")
    bloco3.classList.add("container__discs--format")
    bloco3.style.width = "55%"
    bloco3.style.backgroundColor = "#7454a6"

const bloco4 = document.createElement("div")
    bloco4.classList.add("container__discs--format")
    bloco4.style.width = "70%"
    bloco4.style.backgroundColor = "#4f387d"

tower1.appendChild(bloco1)
tower1.appendChild(bloco2)
tower1.appendChild(bloco3)
tower1.appendChild(bloco4)


