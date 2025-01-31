//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];
function adicionarAmigo() {
    let nome = document.getElementById('amigo');
    if (nome.value == '') {
        alert ('Informe um nome valido!');
        return;
    }
    if (nomes.includes == nome.value) {
        alert ('Nome já esta na lista!');
        return;
    }

nomes.push(nome.value);
;

        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = ''
    

    for (let i = 0; i < nomes.length; i++) {
        lista.innerHTML += '<li>' + nomes[i] + '</li>';
    }
    
    
}

