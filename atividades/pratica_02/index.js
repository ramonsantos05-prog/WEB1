const campoEntrada = document.getElementById("campoEntrada");
const formTarefa = document.getElementById("formTarefa");
const listaTarefas = document.getElementById("listaTarefas");
const modalPropriedades = document.getElementById("modalPropriedades");
const formPropriedades = document.getElementById("formPropriedades");
const nomeTarefaModal = document.getElementById("nomeTarefaModal");
const dataInicio = document.getElementById("dataInicio");
const dataTermino = document.getElementById("dataTermino");
const btnCancelar = document.getElementById("btnCancelar");
const btnSalvar = document.getElementById("btnSalvar");
const CHAVE_TAREFAS = "tarefas-to-do";

let tarefaSelecionada = null;

function novaTarefa(nomeTarefaInformada = campoEntrada.value.trim(), dados = {}) {

    const nomeTarefa = nomeTarefaInformada.trim();

    if (nomeTarefa === "") {

        campoEntrada.classList.add("input-erro");

        setTimeout(function() {
            campoEntrada.classList.remove("input-erro");
        }, 1500);

        return;
    }

    const itemTarefa = document.createElement("li");
    const btnConcluir = document.createElement("button");
    const span = document.createElement("span");
    const prazo = document.createElement("small");
    const btnExcluir = document.createElement("button");

    btnConcluir.className = "btn-concluir";
    btnConcluir.type = "button";
    btnConcluir.setAttribute("aria-label", "Marcar tarefa como concluída");
    btnConcluir.setAttribute("aria-pressed", "false");
    btnConcluir.innerHTML = "<i class='bi bi-circle'></i>";

    span.className = "nome-tarefa";
    span.setAttribute("role", "button");
    span.setAttribute("tabindex", "0");
    span.innerText = nomeTarefa;

    prazo.className = "prazo-tarefa";
    prazo.hidden = true;

    itemTarefa.dataset.inicio = dados.inicio || "";
    itemTarefa.dataset.termino = dados.termino || "";

    btnExcluir.innerHTML = "<i class='bi bi-trash'></i>";

    btnExcluir.setAttribute("aria-label", "Excluir tarefa");

    btnConcluir.onclick = function() {
        const concluida = itemTarefa.classList.toggle("tarefa-concluida");
        span.classList.toggle("concluida", concluida);
        btnConcluir.setAttribute("aria-pressed", String(concluida));
        btnConcluir.setAttribute(
            "aria-label",
            concluida ? "Marcar tarefa como pendente" : "Marcar tarefa como concluída"
        );
        btnConcluir.innerHTML = concluida
            ? "<i class='bi bi-check-circle-fill'></i>"
            : "<i class='bi bi-circle'></i>";
        salvarTarefas();
    };

    span.onclick = function() {
        abrirPropriedades(itemTarefa, nomeTarefa);
    };
    span.onkeydown = function(evento) {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            abrirPropriedades(itemTarefa, nomeTarefa);
        }
    };

    btnExcluir.onclick = function() {
        listaTarefas.removeChild(itemTarefa);
        salvarTarefas();
    };

    itemTarefa.appendChild(btnConcluir);
    itemTarefa.appendChild(span);
    itemTarefa.appendChild(prazo);
    itemTarefa.appendChild(btnExcluir);

    listaTarefas.appendChild(itemTarefa);
    atualizarPrazo(itemTarefa, prazo);

    if (dados.concluida) {
        btnConcluir.click();
    }

    salvarTarefas();

    campoEntrada.value = "";

    if (Object.keys(dados).length === 0) {
        campoEntrada.focus();
    }
}

function salvarTarefas() {
    const tarefas = Array.from(listaTarefas.children).map(function(itemTarefa) {
        return {
            nome: itemTarefa.querySelector(".nome-tarefa").innerText,
            concluida: itemTarefa.classList.contains("tarefa-concluida"),
            inicio: itemTarefa.dataset.inicio || "",
            termino: itemTarefa.dataset.termino || ""
        };
    });

    localStorage.setItem(CHAVE_TAREFAS, JSON.stringify(tarefas));
}

function carregarTarefas() {
    const tarefasSalvas = JSON.parse(localStorage.getItem(CHAVE_TAREFAS) || "[]");

    tarefasSalvas.forEach(function(tarefa) {
        novaTarefa(tarefa.nome, tarefa);
    });
}

function abrirPropriedades(itemTarefa, nomeTarefa) {
    tarefaSelecionada = itemTarefa;
    atualizarPrazo(itemTarefa, itemTarefa.querySelector(".prazo-tarefa"));
    nomeTarefaModal.innerText = nomeTarefa;
    dataInicio.value = itemTarefa.dataset.inicio || "";
    dataTermino.value = itemTarefa.dataset.termino || "";
    dataTermino.min = dataInicio.value;
    modalPropriedades.showModal();
    dataInicio.focus();
}

function atualizarPrazo(itemTarefa, prazo) {
    const dataTerminoTarefa = itemTarefa.dataset.termino;

    if (!dataTerminoTarefa) {
        prazo.innerText = "";
        prazo.hidden = true;
        return;
    }

    const hoje = new Date();
    const hojeSemHora = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const partesData = dataTerminoTarefa.split("-").map(Number);
    const termino = new Date(partesData[0], partesData[1] - 1, partesData[2]);
    const diasRestantes = Math.ceil((termino - hojeSemHora) / (1000 * 60 * 60 * 24));

    prazo.hidden = false;
    prazo.classList.toggle("prazo-vencido", diasRestantes < 0);

    if (diasRestantes < 0) {
        prazo.innerText = "Vencida";
    } else if (diasRestantes === 0) {
        prazo.innerText = "Vence hoje";
    } else if (diasRestantes === 1) {
        prazo.innerText = "Vence em 1 dia";
    } else {
        prazo.innerText = `Vence em ${diasRestantes} dias`;
    }
}

dataInicio.addEventListener("change", function() {
    dataTermino.min = dataInicio.value;
    if (dataTermino.value && dataTermino.value < dataInicio.value) {
        dataTermino.value = dataInicio.value;
    }
});

btnSalvar.addEventListener("click", function() {
    if (!tarefaSelecionada) return;

    tarefaSelecionada.dataset.inicio = dataInicio.value;
    tarefaSelecionada.dataset.termino = dataTermino.value;
    atualizarPrazo(
        tarefaSelecionada,
        tarefaSelecionada.querySelector(".prazo-tarefa")
    );
    salvarTarefas();
    modalPropriedades.close();
});

btnCancelar.addEventListener("click", function() {
    modalPropriedades.close();
});

formPropriedades.addEventListener("submit", function(evento) {
    evento.preventDefault();
    modalPropriedades.close();
});

formTarefa.addEventListener("submit", function(evento) {

    evento.preventDefault();

    novaTarefa();

});

carregarTarefas();