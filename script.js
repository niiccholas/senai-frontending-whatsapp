async function searchUserContatos(telefoneUser){
    const url = `https://senai-backending-projetorevisao-1.onrender.com/v1/whatsapp/chats/${telefoneUser}`

    const response = await fetch(url);
    const data = await response.json();

    return data.contatos
}

async function preencherContatos(contato){

    const listaContatos = document.getElementById('listaContatos')

    const contatoContainer = document.createElement('li')

    const botao = document.createElement('button')

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

async function executeFunctions(){

    const telefoneUser = 11987876567

    const dataContatos = await searchUserContatos(telefoneUser)

    dataContatos.forEach(conversaContato => {
        preencherContatos(conversaContato)
    });

}

executeFunctions();