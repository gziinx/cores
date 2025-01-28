"use strict"

const botaoMudarCor = document.getElementById('mudar-cor')

function mudarCor (){
    const cor = document.getElementById('cor').value
    document.documentElement.style.setProperty('--cor-fundo', cor)
}

botaoMudarCor.addEventListener('click', mudarCor)