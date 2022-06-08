const cep = document.querySelector("#CEP")
cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-", "")
    const options ={
        method: 'GET',
        mode: 'cors',
        Cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json`, options)
    
    .then(Response => {Response.json()
        .then(data => mostraDados(data))
    })
    .catch(e => console.log('Erro inesperado '+ e,message))
})
const mostraDados = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}
