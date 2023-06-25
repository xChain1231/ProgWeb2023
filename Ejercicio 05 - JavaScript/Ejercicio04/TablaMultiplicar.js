function abrirModal() {
  var valor = prompt("Ingrese un valor del 1 al 10:");

  if (valor >= 1 && valor <= 10) {
    var tablaBody = document.getElementById("tablaBody");
    tablaBody.innerHTML = "";

    for (var i = 1; i <= 12; i++) {
      var resultado = valor * i;

      var row = `<tr><td>${i}</td><td>${valor} X ${i} = ${resultado}</td></tr>`;
      tablaBody.innerHTML += row;
    }

    document.getElementById("tablaModal").style.display = "block";
  } else {
    alert("Por favor, ingrese un valor válido del 1 al 10.");
  }
}

function cerrarModal() {
  document.getElementById("tablaModal").style.display = "none";
}
