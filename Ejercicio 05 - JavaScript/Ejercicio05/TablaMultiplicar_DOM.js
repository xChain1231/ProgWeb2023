function generarTabla() {
  var valor = document.getElementById('valor').value;
  var tabla = document.getElementById('tabla');

  // Limpiar tabla
  tabla.innerHTML = '';

  // Generar encabezado
  var encabezado = '<tr><th>Multiplicando</th><th>Resultado</th></tr>';
  tabla.innerHTML += encabezado;

  // Generar filas de la tabla de multiplicar
  for (var i = 1; i <= 12; i++) {
    var resultado = valor * i;
    var fila = '<tr><td>' + valor + ' x ' + i + '</td><td>' + resultado + '</td></tr>';
    tabla.innerHTML += fila;
  }
}
