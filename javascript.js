
function mostraValor(){
    var data = sessionStorage.getItem('nome');
        document.getElementById('p').innerHTML= document.getElementById('p').innerHTML +data;
        console.log(data);
        //alert('Olá '+data);
}   
mostraValor();




/////////////////////Valor dos Filmes///////



function calcularFinal(){
let preço=7;
let soma= [];
let posiçao=0;
let total=0; 

while(posiçao<20){
    soma[posiçao] = document.getElementById("qt"+posiçao).value*preço;
    console.log(soma[posiçao]);
    posiçao +=1;
    
}
for(let i = 0; i < soma.length; i++){
    total += soma[i];
}
document.getElementById("total2").value = "R$ " + total + ",00";
//sessionStorage.setItem('Valor',total);
//window.location = "carrinhodecompra.html";
//alert(total)


}























// do{
//     soma[posiçao] = document.getElementById("qt"+posiçao).value;
//     posiçao +=1 ;
  
//     console.log(soma[posiçao])       
// }while(posiçao<3)


// console.log(soma[posiçao]);

// let total=0;
//     for(let i = 1; i < total.length; i++) {
//         total += soma[i];
//     }
    
   // document.getElementsById("total").value;



// function calcular(){
//     let preço=7.00;
       
//     let valor = document.querySelectorAll("qt").value * preço;
    
//         for(let i = 1; i < valor.length; i++) {
//             let posicao = parseFloat(valor[i].value)
//             let soma = (valor * posicao);  
//         }   
    
//         console.log(soma);
//     }
    
     
    // let soma=0;
    //     for(let i = 1; i < array.length; i++) {
    //         soma += array[i];
    //     }
      
    //     document.getElementsById("totalGeral").value = soma;
    //     alert(array)
    
    
    // function calcularFinal() {      
    //     var contas = document.querySelectorAll("#produ"); 
    //     var total = 0 ;
    //     for(var i= 0; i<contas.length; i++){
    //         var conta = parseFloat(contas[i].value.replace(',','.'));
    //         var valor = (conta+valor);
    //    }
    //    console.log(valor); 
    //  }
    





























// let t=0;
// do{
//     return(t);
//     numero++;
// }
// while(numero<18);
