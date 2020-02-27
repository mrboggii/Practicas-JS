
const numeroSecreto = Math.floor((Math.random()*10))
console.log (numeroSecreto)

const numeroIntroducidoInput = document.getElementById('numeroIntroducidoInput')
const numeroIntentosP = document.getElementById('numeroIntentosP')
const acierto = document.getElementById('acierto')
const fallido = document.getElementById('fallido')
const error = document.getElementById('error')
const intentar = document.getElementById('intentar')
let intentos = 0

let numeroIntroducido = 0
intentar.addEventListener('click', function(){
    error.style.display = 'none'
    acierto.style.display = 'none'
    fallido.style.display = 'none'
    numeroIntroducido = parseInt(numeroIntroducidoInput.value)
    intentos +=1
    console.log('numeroIntroducido: '+numeroIntroducido)
    console.log('numerosecreto: '+ numeroSecreto)
    numeroIntentosP.innerHTML = intentos
    if (numeroIntroducido < 1 || numeroIntroducido > 10){
        error.style.display = 'flex'
    }
    else if(numeroIntroducido === numeroSecreto) {
        acierto.style.display='flex'
    }
    else {
        fallido.style.display = 'flex'
    }
})