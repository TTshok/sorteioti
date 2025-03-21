var nomeAdc = window.document.getElementById('nomeAdc')
var selAdc = window.document.getElementById('selAdc')
// var numeroAdc = window.document.getElementById('numeroAdc')
var res = window.document.getElementById('res') 
var  num = []
var num2 = []


function adcionar(){
     
    let nomeM = nomeAdc.value.toUpperCase()
    let valorExiste = num.indexOf(nomeM)
    
    if(nomeAdc.value.length == 0){
        window.alert('Está vazio')
    } else if (valorExiste != -1 ){
        window.alert('valor ja existe')
    } 
    else{
        num.push(nomeM)
        selAdc.innerHTML += `<option value = "teste">${nomeM} adicionado<br></option>`
        res.innerHTML = ''
        let tamVetor = num2.length 
        for(let i = 0; i < tamVetor; i++){ //limpar o segundo vetor
            num2.pop()
        } 
    
    }
    nomeAdc.value = ''// limpa o input
    nomeAdc.focus() //se posiciona no imput anotar dps

}

function finalizar(){
    num.sort()
    let sorteado = num[parseInt(Math.random() * num.length)]
    let nomeJaSorteado = num2.indexOf(sorteado)
    
    
    if(num.length == 0){
        window.alert('Sem nomes adicionados')
    }else if(num.length == num2.length){
        window.alert('Todos já foram sorteados')
    }else if(nomeJaSorteado != -1){
        finalizar()
    }else{
        num2.push(sorteado)
        res.innerHTML += `${sorteado}<br>`
        }
      
}




