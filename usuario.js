
//Informacion del usuario

//let usuarioEmail = prompt("Porfavor dinos tu email para poder confirmar tu compra")
//let direccion = prompt("Dinos tu direccion a donde será enviado el pedido")

//Guardar datos de usuario en Storage
//localStorage.setItem(`email`, usuarioEmail)
//localStorage.setItem(`domicilioDeEnvio`, direccion)



//Agregar items al carrito


let listaProductos = document.getElementsByClassName("imageZoom");




//Carrito

class Producto {
    constructor(prod){
        this.nombre = prod.nombre();
        this.precio = parseFloat(prod.precio);
    }
}

const carritoCompras = []
const guardarSession = () =>{sessionStorage.setItem("Compras",JSON.stringify(carritoCompras))};
//sessionStorage.setItem("Compras",JSON.stringify(carritoCompras))




//Añadir productos
listaProductos[0].ondblclick = () =>{carritoCompras.push(new Producto("Maceta Mini","450")), console.log("se agrego al carritoo")}
listaProductos[1].ondblclick = () =>{carritoCompras.push(new Producto("Maceta Mini","300")), console.log("se agrego al carrito")}