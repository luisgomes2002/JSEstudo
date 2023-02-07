let numero = Math.floor(Math.random() * 10 + 1)
let qrespostas = 0

let mandar = document.getElementById("enviar").onclick = function() {
    let resposta = document.getElementById("resposta").value
    qrespostas+= 1

    if(numero == resposta){
        alert(`O numero foi ${numero}, quantidade de tentativas ${qrespostas}`)
    }else if(numero > resposta){
        alert("Tente um numero maior")
    }else if(numero < resposta){
        alert("Tente um numero menor")
    }
}

console.log(numero)

