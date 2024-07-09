function gerador() {
    var n1 = document.getElementById('numero1')
    var tabuada = " "
    var resultado = document.getElementById('resultado')
    var numero1 = Number(n1.value)
    for(var count=1; count<=10; count++) {
        tabuada += `${numero1} x ${count} é igual á = ${numero1*count} <br/> `
        
    }
    resultado.innerHTML = tabuada
}