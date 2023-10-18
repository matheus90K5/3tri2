const form = document.querySelector("form")
const resp = document.querySelector("outResp")
const resp1 = document.querySelector("outResp1")

//ouvinte
form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const ladoA = Number(form.inLadoA.value)
    const ladoB = Number(form.inLadoB.value)
    const ladoC = Number(form.inLadoC.value)

    if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoB + ladoA)){
        alert("Essas medida não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos outros dois")
        form.inLadoA.focus()
        form.inLadoB.focus()
        form.inLadoC.focus()
        return
    }

    resp.innerText = `Lados podem formar um triângulo`

    if(ladoA == ladoB && ladoA == ladoC){
        resp1.innerText = `Tipo: Equilátero`
    } else if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoC == ladoC)){
        resp1.innerText = `Tipo: Isóceles`
    } else {
        resp1.innerText = `Tipo: Escaleno`
    }
})