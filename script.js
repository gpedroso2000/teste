function mudaQtd(domThis){
    var qtd = Number(document.getElementById('qtd').value)
    if(domThis.id == 'btnDim'){
        var val = --qtd
        document.getElementById('qtd').value = val <= 0 ? 0 : val  
    }
    else{
        document.getElementById('qtd').value = ++qtd 
    }
}

function finalizar(){
    var qtd = Number(document.getElementById('qtd').value);
    var obs = document.getElementById('obs').value;

    var adesivos = [];

    if(document.querySelectorAll('input[type="checkbox"]:checked').length == 0){
        alert('Por favor, selecione um adesivo!');
        return;
    }

    if(qtd <= 0){
        alert('Por favor, selecione uma quantidade');
        return;
    }

    document.querySelectorAll('input[type="checkbox"]:checked').forEach(ad =>{
        var obj = {
            adesivo     :  ad.name,
            quantidade  :  qtd,
            observacao  :  obs
        }

        adesivos.push(obj)
    })

    console.log(adesivos)

}
