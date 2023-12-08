let num = [1,3,4,6,7,9,12,22,77]
num.push(2)
num.sort()
console.log(num)
let pos = num.indexOf(5)
if(pos == -1){
    console.log(`O valor que você digitou não foi encontrado`)
}else{
    console.log(`O valor esta na posição ${pos}`)
}
