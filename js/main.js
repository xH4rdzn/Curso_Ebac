$(document).ready(function () {
  $("#carousel").slick({
    autoplay: true,
  });
  $(".menu-hamb").click(function () {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
    },
    messages: {
      nome: "Por Favor, Insira seu nome",
    },
    submitHandler: function (form) {},
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");

    const nomeVeiculo = $(this).parent().find("h3").text();

    $("#Veiculo-interesse").val(nomeVeiculo);
    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
