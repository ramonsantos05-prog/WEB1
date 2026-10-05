// Seleção de elementos do DOM


const imgPreferencia = document.getElementById("imgPreferencia");
const formCadastro = document.getElementById("formCadastro");
const sectionDados = document.getElementById("sectionDados");

function renderizarDados(nome, idade, email, senha, profissao){
    const lista = document.createElement("ul");
    const itemNome = document.createElement("li");
    const itemIdade = document.createElement("li");
    const itemEmail = document.createElement("li");
    const itemSenha = document.createElement("li");
    const itemProfissao = document.createElement("li");

    itemNome.textContent = "Nome: " + nome;
    itemIdade.textContent = "Idade: " + idade;
    itemEmail.textContent = "Email: " + email;
    itemSenha.textContent = "Senha: " + "*".repeat(senha.length);
    itemProfissao.textContent = "Profissão: " + profissao;

    lista.appendChild(itemNome);
    lista.appendChild(itemIdade);
    lista.appendChild(itemEmail);
    lista.appendChild(itemSenha);
    lista.appendChild(itemProfissao);

    sectionDados.appendChild(lista);
}

function cadastrarDados(event){
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let profissao = document.getElementById("profissao").value;

    imgPreferencia.src = profissao;
    renderizarDados(nome, idade, email, senha, profissao);
}



formCadastro.addEventListener("submit", cadastrarDados);
