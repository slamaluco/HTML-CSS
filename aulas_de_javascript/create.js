const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");
const botao = document.querySelector('#bnt_copiar');
const todos = [...document.querySelectorAll('.botafogo')];
const tirar = [...document.querySelectorAll('.selecionado')];

todos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const sla = evt.target
        sla.classList.toggle("selecionado")
     })
})
botao.addEventListener("click",()=>{
    const selecionados = [...document.querySelectorAll(".selecionado")]
    const naoselecionados = [...document.querySelectorAll(".botafogo:not(.selecionado)")]
    selecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    naoselecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})