$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#nova-tarefa").val();
    const novoItem = $(`<li>${novaTarefa}</li>`);
    $(novoItem).appendTo("ul");
    $("#nova-tarefa").val("");

    $("#lista-tarefas").on("click", "li", function (e) {
      $(e.target).addClass("efeito-lista");
    });
  });
});
