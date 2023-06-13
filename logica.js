

function calcular() {

    let segundos = document.getElementById('segundos')
    let resultado = document.getElementById('resposta')

    if (segundos.value.length <= 0 ) {

        alert('Digite um valor válido meu querido...')

    } else {

        let s = Number(segundos.value)

        let resposta = s / 3

        if (resposta <= 0.5) {

            resultado.innerHTML = `Esse raio caiu a ${resposta}Km!, foi muito perto!`

        } else if (resposta <= 1 && resposta > 0.5) {

            resultado.innerHTML = `Esse reaio caiu a ${resposta}Km!, foi perto.`

        } else if (resposta <= 2 && resposta > 1) {

            resultado.innerHTML = `Esse aqui caiu a ${resposta}Km, foi longe...`

        } else if (resposta <= 3 && resposta > 2) {

            resultado.innerHTML = `Esse raio caiu a ${resposta}Km, caiu muito longe...`
        }
    }
}