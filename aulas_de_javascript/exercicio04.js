function tabuada() {
    let selectElement = document.getElementById('seletab')
    let n = Number(document.getElementById('num1').value)
    
    selectElement.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
        let option = document.createElement('option')
        option.value = `${n} x ${c} = ${n * c}`
        option.text = `${n} x ${c} = ${n * c}`
        selectElement.add(option)
    }
}

