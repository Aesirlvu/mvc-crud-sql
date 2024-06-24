const form = document.getElementById('form')




const registrar = async(e) =>{
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const dni = document.getElementById('documento').value;
    const obraSocial = document.getElementById('obraSocial').value;
    const contrasenia = document.getElementById('contrasenia').value;



}
const result = await fetch("http://localhost:4000/auth/register",
    {
        method: 'POST',
        body: JSON.stringify({nombre, apellido, usuario, correo, contrasenia}),
        headers: {
            'Content-type': 'application/json'
        }
    }


 )