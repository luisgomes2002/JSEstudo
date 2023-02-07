document.getElementById("enviar").onclick = function(){

    let temp
    
    if(document.getElementById("C").checked){
        temp = document.getElementById("resposta").value
        temp = Number(temp)
        temp = toC(temp)
        temp = document.getElementById("mostrar").innerHTML = temp + "°C"
    }else if(document.getElementById("F").checked){
        temp = document.getElementById("resposta").value
        temp = Number(temp)
        temp = toF(temp)
        temp = document.getElementById("mostrar").innerHTML = temp + "°F"
    }else{
        document.getElementById("mostrar").innerHTML = "Digite um numero"
    }

}

function toC(temp){
    return(temp - 32 * (5/9))
}

function toF(temp){
    return temp * 9 / 5 + 32
}
