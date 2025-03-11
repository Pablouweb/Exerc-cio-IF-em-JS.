function verificarNumero(){
    var numero = document.getElementById("numero").value;
    var mensagem = "";

    if(numero >= 0){
        mensagem = "Seu número é positivo!"
    } else if (numero < 0){
        mensagem = "Seu número é negativo!"
    }
    console.log(mensagem.length)
document.getElementById("resultado").innerHTML=mensagem;
}