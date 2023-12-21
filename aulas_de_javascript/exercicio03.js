function calcular(){
    let primeiro = document.getElementById('n1')
    let fim = document.getElementById('n2')
    let passo = document.getElementById('n3')
    let res = document.getElementById('res')
    if(primeiro.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[Erro] digite os dados novamente.')
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(primeiro.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        
        res.innerHTML += `\u{1F3C1}`; // Adiciona o emoji no final
        
    }
}