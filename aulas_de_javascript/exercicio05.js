let num = document.querySelector('input#ar1')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero (n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }  else{
        return false
    }
}

function inlista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }  else{
        return false
    }
}

function Adicionar(){
        if(isNumero(num.value) && !inlista(num.value ,valores)) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor digitado ${num.value}`
            lista.appendChild(item)
            res.innerHTML = ' '
        }  else{
            window.alert('valor invalido ou já encontrado na lista.')

        }
        num.value = ' '
        num.focus()
}

function Finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }
        else{
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0

            for(let pos in valores){
                soma += valores[pos]
                if(valores[pos] > maior)
                maior = valores[pos]
                if(valores[pos] < menor )
                menor = valores[pos]
            }
            media = soma / tot 
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo ${tot} numeros cadastrados.</p>`
            res.innerHTML += `<p>O maior valores informado foi ${maior}</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
            res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
            res.innerHTML += `<p>A media dos valores foi ${media}</p>`
    }
}