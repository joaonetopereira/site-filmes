function mandarValor(){
    let preco = 7
    let qt = document.getElementById("qtd").value*preco;
    if(qt == ""){
        alert('Informe uma quantidade');
    }
    else{
        sessionStorage.setItem('nome3',qt);
        window.location = "carrinhodecompra.html";
        alert("Adicionado ao carrinho");
    }
}