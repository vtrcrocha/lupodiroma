var computed = false;
let token = JSON.parse(localStorage.getItem("TOKEN"))
var cd = document.getElementById("CD")
var lg = document.getElementById("LG")
var sr = document.getElementById("SR")

if(token.correct == true){
    lg.style.display = "none";
    cd.style.display = "none";
    sr.style.display = "block"
    computed = true

}
else if (token.correct == false){
    lg.style.display = "block";
    cd.style.display = "block";
    sr.style.display = "none"
}
function sair(){
    localStorage.removeItem("TOKEN")
    location.reload()
}

function fazerpedido(){
    if(computed == true){
        window.location.href =  "/pages/fazer-pedido/index.html";
    }
    else if (computed == false){
        alert("Voce precisa estar logado para fazer um pedido")
    }

}
// if(token.correct == true){
//     
// }