let emailConsulta = document.getElementById("email");

let consultaCliente = document.getElementById("textareaConsulta");

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(`E-mail del usuario es ${emailConsulta.value}`)
    console.log(consultaCliente.value)
    alert(`Consulta enviada, se te enviará una respuesta a tu mail ${emailConsulta.value} estate atento`)
});