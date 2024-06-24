document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (!token) {
    document.getElementById("nav-items").innerHTML = `
              <a class="nav-link registro" href="/client/register.html">REGISTRARSE</a>
              <a class="nav-link iniciar_sesion" href="/client/login.html">INICIAR SESIÓN</a>
            `;
  } else {
    // En caso de que si exista el token, mostraremos un boton de cerrar sesión.
    document.getElementById(
      "nav-item"
    ).innerHTML = `<li><a href="" id="logout">Cerrar Sesión</a></li>`;

    // Le agregamos un evento click a dicho boton.
    document.getElementById("logout").addEventListener("click", () => {
      // Al clickear se eliminara del localStorage el token.
      localStorage.removeItem("token");

      // Recargamos la pagina para que hagan efecto los cambios.
      window.location.reload();
    });
  }
});
