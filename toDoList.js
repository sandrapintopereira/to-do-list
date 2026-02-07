const formTarefa = document.getElementById("form-tarefa");
const inputTarefa = document.getElementById("adicionar-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

formTarefa.addEventListener("submit", (e) => {
    e.preventDefault(); //evitar reload da página
    
    
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === "") return;

    const li = document.createElement("li");
    li.classList.add("item-lista");

    li.innerHTML = `
        <input type="checkbox" class="check-tarefa">
        <span>${textoTarefa}</span>
        <button class="btn-remover">X</button>
    `;

  listaTarefas.appendChild(li);
  inputTarefa.value = "";
});
