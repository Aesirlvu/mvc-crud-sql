const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", () => {
  const registrar = async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const dni = document.getElementById("dni").value;
    const obraSocial = document.getElementById("obraSocial").value;
    console.log("Obra social seleccionada:", obraSocial);
    const contrasenia = document.getElementById("password").value;

    const result = await fetch("http://localhost:4000/auth/registrar", {
      method: "POST",
      body: JSON.stringify({
        nombre,
        apellido,
        telefono,
        email,
        fechaNacimiento,
        dni,
        obraSocial,
        contrasenia,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const response = await result.json();
    console.log(response);
    if (response.error) {
      alert(response.msg);
    } else {
      alert(response.msg);
      window.location.href = "/client/login.html";
    }
  };

  form.addEventListener("submit", registrar);
});
