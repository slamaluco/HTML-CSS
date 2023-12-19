function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.querySelector('div#res')
    const img = document.createElement('img')
    img.setAttribute('id','foto')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente! ')
    } else {
        const fsex = document.getElementsByName('radsex')
        let idade = ano - fano.value
        let genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src','criança-m.jpg')
            }
            else if (idade < 19 ){
                //jovem 
                img.setAttribute('src','foto-jovem-h.jpg')
            }
            else if(idade <= 30){
                //adulto
                img.setAttribute('src','jovem-adulto-homem.jpg')
            }
            else if(idade <= 64 ){
                //adulto 
                img.setAttribute('src','homem-adulto.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','idoso-homem-m.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src','criança-f.jpg')
            }
            else if (idade < 19 ){
                //jovem 
                img.setAttribute('src','foto-jovem-m.jpg')
            }
            else if(idade <= 30){
                //adulto
                img.setAttribute('src','foto-jovem-adulta-m.jpg')
            }
            else if (idade <= 51 ){
                //adulto 
                img.setAttribute('src','mulher-meia-idade.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','idosa-mulher-f.jpg')
            }
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}