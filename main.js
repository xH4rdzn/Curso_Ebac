const form = document.getElementById("form-comparar");
const btn = document.querySelector("#btn-enviar");
const numA = document.querySelector("#numero-a");
const numB = document.querySelector("#numero-b");

function validaNros(numA, numB) {
  if (numB > numA) {
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formEValido = false;
  const vlrNumA = numA.value;
  const vlrNumB = numB.value;
  const sucessMsg = `O número B=<b>${vlrNumB}</b>, é maior que o número A=${vlrNumA}`;
  const errorMsg = `O número A=<b>${vlrNumA}</b>, é maior que o número B=<b>${vlrNumB}</b>`;
  const containnerMsgError = document.querySelector(".error-message");
  const containnerMsgSucess = document.querySelector(".sucess-message");
  if ((formEValido = numB.value > numA.value)) {
    // const containnerMsgSucess = document.querySelector(".sucess-message");
    containnerMsgSucess.innerHTML = sucessMsg;
    containnerMsgSucess.style.display = "block";
    containnerMsgError.style.display = "none";
    numA.value = "";
    numB.value = "";
  } else {
    // const containnerMsgError = document.querySelector(".error-message");
    containnerMsgError.innerHTML = errorMsg;
    containnerMsgError.style.display = "block";
    containnerMsgSucess.style.display = "none";
    numA.value = "";
    numB.value = "";
  }
});
