var edad = parseInt(prompt("Ingrese su edad:"));

    var mensaje;
    if (edad >= 18) {
      mensaje = "Bienvenido, usted tiene acceso a todos nuestros servicios.";
    } else {
      mensaje = "Bienvenido, usted tiene acceso a servicios limitados.";
    }
    alert(mensaje);