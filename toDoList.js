const formTarefa = document.getElementById("form-tarefa");

formTarefa.addEventListener("submit", (e) => {
    e.preventDefault(); //evitar reload da página
    console.log("Form Submetido");
});
