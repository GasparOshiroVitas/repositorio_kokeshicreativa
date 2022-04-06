let emailConsulta = document.getElementById("email");

let consultaCliente = document.getElementById("textareaConsulta");

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    Swal.fire({
        title: 'Gracias!',
        text: 'En las proximas horas recibiras un e-mail con una respuesta a tu consulta',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
    console.log(`E-mail del usuario es ${emailConsulta.value}`)
    console.log(consultaCliente.value)
});