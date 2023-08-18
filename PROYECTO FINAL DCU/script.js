document.addEventListener('DOMContentLoaded', function () {
    const irAConsultaBtn = document.getElementById('ir-a-consulta');
    const volverBtn = document.getElementById('volver-btn');
    const registroDiv = document.getElementById('registro');
    const consultaDiv = document.getElementById('consulta');
    const mensajeRegistro = document.getElementById('mensaje-registro');
  
    irAConsultaBtn.addEventListener('click', function (event) {
      event.preventDefault();
      registroDiv.style.display = 'none';
      consultaDiv.style.display = 'block';
    });
  
    volverBtn.addEventListener('click', function (event) {
      event.preventDefault();
      consultaDiv.style.display = 'none';
      registroDiv.style.display = 'block';
    });
  
    const userIdsSelect = document.getElementById('user-ids');
    const consultBtn = document.getElementById('consult-btn');
    const deleteBtn = document.getElementById('delete-btn'); // Agregado
    const userDetailsDiv = document.getElementById('user-details');
  
    // Simulando una base de datos local
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    function fillUserIdsSelect() {
      userIdsSelect.innerHTML = usuarios.map(usuario => `<option value="${usuario.id}">${usuario.id}</option>`).join('');
    }
  
    function showUserDetails(userId) {
      const user = usuarios.find(usuario => usuario.id === userId);
  
      if (user) {
        userDetailsDiv.innerHTML = `
          <div id="result-container">
            <h3>Detalles del Usuario:</h3>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Nombre:</strong> ${user.nombre}</p>
            <p><strong>Correo:</strong> ${user.correo}</p>
            <p><strong>Teléfono:</strong> ${user.telefono}</p>
            ${user.foto ? `<div class="img-container"><img src="${user.foto}" alt="Foto de ${user.nombre}"></div>` : ''}
          </div>
        `;
      } else {
        userDetailsDiv.innerHTML = '<p>Usuario no encontrado.</p>';
      }
    }
  
    consultBtn.addEventListener('click', function () {
      const selectedUserId = userIdsSelect.value;
      showUserDetails(selectedUserId);
    });
  
    deleteBtn.addEventListener('click', function () { // Agregado
      const selectedUserId = userIdsSelect.value;
      const index = usuarios.findIndex(usuario => usuario.id === selectedUserId);
  
      if (index !== -1) {
        usuarios.splice(index, 1);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        mensajeRegistro.innerText = 'Usuario eliminado exitosamente.';
        userDetailsDiv.innerHTML = ''; // Limpiar los detalles del usuario
        fillUserIdsSelect();
      } else {
        mensajeRegistro.innerText = 'Usuario no encontrado.';
      }
  
      setTimeout(function () {
        mensajeRegistro.innerText = '';
      }, 3000);
    });
  
    fillUserIdsSelect();
  
    const registrationForm = document.getElementById('registration-form');
  
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const id = document.getElementById('id').value;
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const fotoInput = document.getElementById('foto');
      let foto = '';
  
      if (fotoInput.files.length > 0) {
        foto = URL.createObjectURL(fotoInput.files[0]);
      }
  
      const existingUser = usuarios.find(usuario => usuario.id === id);
  
      if (existingUser) {
        mensajeRegistro.innerText = 'No se puede registrar con el mismo ID. Utilice otro ID.';
      } else {
        usuarios.push({ id, nombre, correo, telefono, foto });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        mensajeRegistro.innerText = 'Usuario registrado exitosamente.';
      }
  
      setTimeout(function () {
        mensajeRegistro.innerText = '';
      }, 3000);
  
      registrationForm.reset();
      fotoInput.value = ''; // Reiniciar valor del input de foto
    });
  });