function calcularFinal(){
    let preço=7;
    let soma= [];
    let posiçao=0;
    let total=0; 
    
    while(posiçao<1){
        soma[posiçao] = document.getElementById("qt"+posiçao).value*preço;
        console.log(soma[posiçao]);
        posiçao +=1;
        
    }
    for(let i = 0; i < soma.length; i++){
        total += soma[i];
    }
    document.getElementById("total2").value = "R$ " + total + ",00";
    sessionStorage.setItem('Valor',total);
    window.location = "carrinhodecompra.html";
    alert(total)
    
}
let data = sessionStorage.getItem('nome10');
function mostraValor(){
    // let data = sessionStorage.getItem('nome10');
    // let p =  document.querySelector("#paragrafo").innerHTML;
    // p += data;
        document.getElementById('paragrafo').innerHTML += data;
        // document.querySelector("#p").innerHTML += data;
        console.log(data);
        //alert('Olá '+data);
}   
// mostraValor();