
function renderText(data) {
    // Valores hex embaixo das cores
       document.getElementById('color-1-hex').textContent = data.colors[0].hex.value
       document.getElementById('color-2-hex').textContent = data.colors[1].hex.value
       document.getElementById('color-3-hex').textContent = data.colors[2].hex.value
       document.getElementById('color-4-hex').textContent = data.colors[3].hex.value
       document.getElementById('color-5-hex').textContent = data.colors[4].hex.value
}

function renderColors(data) {
    // mudar a cor de fundo para o esquema desejado
       document.getElementById('color-1').style.backgroundColor = data.colors[0].hex.value
       document.getElementById('color-2').style.backgroundColor = data.colors[1].hex.value
       document.getElementById('color-3').style.backgroundColor = data.colors[2].hex.value
       document.getElementById('color-4').style.backgroundColor = data.colors[3].hex.value
       document.getElementById('color-5').style.backgroundColor = data.colors[4].hex.value
       
}

const getBtn = document.getElementById('btn')
getBtn.addEventListener('click', function () {
   const modeOptions = document.getElementById('options').value
   let hexValue = document.getElementById('chosen-color').value.substring(1)
   fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${modeOptions}&count=5`)
   .then (res => res.json())
   .then(data => {
      renderColors(data)
      renderText(data)
      
   })
})