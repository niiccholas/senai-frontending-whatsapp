async function searchUserConversas(telefoneUser){
    const url = `https://senai-backending-projetorevisao-1.onrender.com/v1/whatsapp/chats/${telefoneUser}`

    const response = await fetch(url);
    const data = await response.json();

    return data.contatos
}

async function preencherContatos(contato){

    const listaContatos = document.getElementById('listaContatos')

    const contatoContainer = document.createElement('li')

    const botao = document.createElement('button')
    botao.classList.add('botaoContato')

    const imgContato = document.createElement('img')
    imgContato.src = './img/user.png'

    const section = document.createElement('section')
    
    const nomeContato = document.createElement('h2')
    nomeContato.textContent = contato.name

    const ultimaMensagem = document.createElement('p')
    ultimaMensagem.textContent = contato.messages[(contato.messages.length - 1)].content


    section.appendChild(nomeContato)
    section.appendChild(ultimaMensagem)

    botao.appendChild(imgContato)
    botao.appendChild(section)

    contatoContainer.appendChild(botao)

    listaContatos.appendChild(contatoContainer)

}

async function preencherConversa(conversa){

    const nomeContato = getElementById('nomeContato')
    nomeContato

    const listaMensagens = document.getElementById('messages')
    listaMensagens.replaceChildren('')

    console.log(conversa)

    conversa.messages.forEach(mensagem => {

        const li = document.createElement('li')
        const p = document.createElement('p')
        p.textContent = mensagem.content
        li.appendChild(p)
        if(mensagem.sender == 'me'){
            li.style.alignSelf = 'end'
        }
        listaMensagens.appendChild(li)
    });

}

async function executeFunctions(){
    const telefoneUser = 11987876567;
    const dataContatos = await searchUserConversas(telefoneUser);

    dataContatos.forEach(conversaContato => {
        preencherContatos(conversaContato);
    });

    const botoesContato = document.querySelectorAll('.botaoContato');

    botoesContato.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            preencherConversa(dataContatos[index]);
        });
    });
}    

executeFunctions();
