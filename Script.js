function logim(){
    let logir = document.getElementById("usuario").value;
    if(logir == ""){
        alert('Informe seu nome');
    }
    else{
        sessionStorage.setItem('nome10',logir);
        window.location.replace ("pagina2 copy.html")
        alert(logir +' você esta logado.');
        
    }
}
