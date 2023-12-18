function carregar(){
const msg = document.getElementById('msg')
const img = document.getElementById('imagens')
const data = new Date()
const hora = data.getHours()
msg.innerHTML = `Agora são ${hora} Horas.`
if (hora >= 0 && hora <= 12 ){
    //msg.innerHTML = `bom dia.`
    img.src ='manhafoto.png'
    document.body.style.background= '#e5c247'
} else if(hora >= 12 && hora <= 18){
   // msg.innerHTML = `boa tarde.`
    img.src = 'tardefoto.png'
    document.body.style.background = '#6a6f29'
}  else{
    // msg.innerHTML = `Boa Noite.`
    img.src = 'noitefoto.png'
    document.body.style.background = '#4e3d61'
}
}