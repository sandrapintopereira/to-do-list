const formTarefa = document.getElementById("form-tarefa");
const inputTarefa = document.getElementById("adicionar-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");

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


listaTarefas.addEventListener("click", (e) => {
  if (e.target.classList.contains("check-tarefa")) {
    const li = e.target.closest("li");
    li.classList.toggle("tarefa-concluida");
  }
});


listaTarefas.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-remover")) {
    const li = e.target.closest("li");
    li.remove();
  }
});
