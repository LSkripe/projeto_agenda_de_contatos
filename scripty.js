const form = document.getElementById('form-contatos');
const noContato = [];
const nuContato = [];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){

    const nomeContato = document.getElementById('nome-contato');
    const regiaoContato = document.getElementById('regiao-contato')
    const numeroContato = document.getElementById('numero-contato');

    if (noContato.includes(nomeContato.value)){
        alert(`O contato : <b/>${nomeContato.value}</b> já foi adicionado, verifique se o nome está correto ou adicione um apelido !`);
        return;
    } else if (nuContato.includes(numeroContato.value)){  
        alert(`O numero de contato : <b/>${numeroContato.value}</b> já foi adicionado em outro contato !`);
        return;
    } else {       
        noContato.push(nomeContato.value);
        nuContato.push(numeroContato.value);

        let linha = '<tr>';
        linha += `<td> ${nomeContato.value}</td>`;
        linha += `<td> (${regiaoContato.value})</td>`;
        linha += `<td> ${numeroContato.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    nomeContato.value = '';
    numeroContato.value = '';
    regiaoContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
