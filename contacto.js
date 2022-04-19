const emailConsulta = document.getElementById("email");

const consultaCliente = document.getElementById("textareaConsulta");

const formulario = document.getElementById("formulario");

const boton =document.getElementById("boton")

formulario.addEventListener("submit",function(e){
    e.preventDefault();

    boton.value= "Enviando.."

    const serviceID = 'default_service';
    const templateID = 'template_b6vtmuo';


     emailjs.sendForm(serviceID, templateID, this)
        .then(()=>{
            boton.value = "Enviar";
            Swal.fire({
                icon: 'success',
                title: 'Ya recibimos tu consulta!',
                text: 'En las proximas 72 horas resolveremos tu duda!',
              });
        },(error) =>{
            boton.value ="Enviar";
            Swal.fire({
                icon: 'error',
                title: `Ups!`,
                text: 'Ha ocurrido un error '(JSON.stringify(error)),
                footer: 'Porfavor intenta dentro de unos segundos'
              });
        });
});
