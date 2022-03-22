
//Valoares a Ingresar
let nombreCliente = prompt("Hola,como estás? Dinos tu nombre para una mejor experiencia")
alert(`Hola! Precio de lista de compras:\nMate: $300 // Maceta: $400 // Taza: $200 // Cartera: $350`);
let unidadesMate = prompt("Cuantos mates quieres?");
let unidadesMaceta = prompt("Cuantas macetas quieres?");
let unidadesTaza = prompt("Cuantas tazas quieres?");
let unidadesCartera = prompt("Cuantas carteras quieres?");

//Crear prouctos
class Producto {
    constructor(nombre,precio,position){
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.position = parseInt(position)
    }
    iva() {
        this.precio = this.precio * 1.21;
    }
}
//Arrays
const listaProductos= [];
listaProductos.push(new Producto("Mate", "300","0"))
listaProductos.push(new Producto("Maceta", "400", "1"))
listaProductos.push(new Producto("Taza","200","2"))
listaProductos.push(new Producto("Cartera", "350","3"))
listaProductos.push(new Producto("Hornito","250","4"))


//Calculo IVA
for(const Producto of listaProductos){
    Producto.iva()
    console.log(Producto.nombre,Producto.precio)
}

const descuento = 0.95 ;
function aplicarDescuento(resultadoTotal,descuento){
    resultadoDescuento=resultadoTotal*descuento
}



const envio = 100 ;
function resultadoConEnvio(resultado,envio){
    resultadoEnvio = resultado+ envio
}
function aplicarDescEnv (resultadoDescuento,envio){
    resEnvDesc = resultadoDescuento + envio
}

function calculo(producto,precio) { 
    resultado = producto*precio
    console.log(`El precio a abonar es de $` + resultado)
}
calculo(unidadesMate,listaProductos[0].precio)

calculo(unidadesMaceta,listaProductos[1].precio)

calculo(unidadesTaza,listaProductos[2].precio)

calculo(unidadesCartera,listaProductos[3].precio)



function calculoTotal(){
    resultadoTotal = (unidadesMate*listaProductos[0].precio)+(unidadesMaceta*listaProductos[1].precio)+(unidadesTaza*listaProductos[2].precio)+(unidadesCartera*listaProductos[3].precio)
    console.log(`El precio TOTAL a abonar (sin descuento y envio) es de $`+ resultadoTotal)
    return
}
calculoTotal()

let formaPago = parseInt(prompt(`Nos gustaría saber con que método de pago vas a abonar.\nTe recordamos que con la compra en efectivo o débito obtienes un descuento del 5%!\n 1|Débito/Efectivo 2|Crédito`))
while((formaPago !=1) && (formaPago!=2)){
    alert(`Ingresaste un número erróneo, porfavor intenta de nuevo`);
    formaPago = parseInt(prompt(`Nos gustaría saber con que método de pago vas a abonar.\nTe recordamos que con la compra en efectivo o débito obtienes un descuento del 5%!\n 1|Débito/Efectivo 2|Crédito`))
}
if(formaPago==1){
    aplicarDescuento(resultadoTotal,descuento)
    console.log(nombreCliente+` Recibe un descuento del 5%, y el precio a abonar(sin envío) es de `+ resultadoDescuento)
    let opcion  = parseInt(prompt(`Hola, para saber el costo de envío porfavor sinos si recides en Córdoba, Argentina 1/SI || 2/NO`))
while ((opcion != 1) && (opcion!=2)){
    alert(`Ingresaste un numero erróneo, porfavor intenta de nuevo`);
    opcion =parseInt(prompt(`Para saber el costo de envío porfavor sinos si recides en Córdoba, Argentina 1/SI || 2/NO`));
}
if(opcion==1) {
    console.log(`Hola`+ nombreCliente+`! El precio total es de $`+ resultadoDescuento)
}else{
    aplicarDescEnv(resultadoDescuento,envio)
    console.log(`Hola `+ nombreCliente +`! El precio total mas el envio es de $`+ resEnvDesc)
}
}else{
    console.log(nombreCliente+` abona con tarjeta de crédito, por lo tanto no recibe descuento. El total a abonar es $`+resultadoTotal)
    let opcion  = parseInt(prompt(`Hola, para saber el costo de envío porfavor sinos si recides en Córdoba, Argentina 1/SI || 2/NO`))
while ((opcion != 1) && (opcion!=2)){
    alert(`Ingresaste un numero erróneo, porfavor intenta de nuevo`);
    opcion =parseInt(prompt(`Para saber el costo de envío porfavor sinos si recides en Córdoba, Argentina 1/SI || 2/NO`));
}
if(opcion==1) {
    console.log(`Hola`+ nombreCliente+`! El precio total es de $`+ resultadoTotal)
}else{
    resultadoConEnvio(resultadoTotal,envio)
    console.log(`El precio total mas el envio es de $`+ resultadoEnvio)
}
}