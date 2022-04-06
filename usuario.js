
//Informacion del usuario

//let usuarioEmail = prompt("Porfavor dinos tu email para poder confirmar tu compra")
//let direccion = prompt("Dinos tu direccion a donde será enviado el pedido")

//Guardar datos de usuario en Storage
//localStorage.setItem(`email`, usuarioEmail)
//localStorage.setItem(`domicilioDeEnvio`, direccion)

//Constructor
class Producto{
    constructor(id,item,precio){
        this.id = id;
        this.item = item;
        this.precio = precio;
    }
    sumaIva () {
        this.precio = this.precio * 1.21;
    };
}
//Productos

const listaProductos = []
listaProductos.push(new Producto(`0`,`Maceta Mini`,  500));
listaProductos.push(new Producto(`1`,`Mate  Kokeshi`,`450`));
listaProductos.push(new Producto(`2`,`Mate Kokeshi Texturado Blanco`,`550`));
listaProductos.push(new Producto(`3`,`Mate Kokeshi Texturado Aqua`,`500`));
listaProductos.push(new Producto(`4`,`Mate Kokeshi Texturado Cuarzo`,`500`));
listaProductos.push(new Producto(`5`,`Set tazas de té`,`650`));
listaProductos.push(new Producto(`6`,`Carterterita Kokeshi`,`400`));
listaProductos.push(new Producto(`7`,`Maceta Mini Lisa`,`300`));
listaProductos.push(new Producto(`8`,`Mate Kokeshi Liso`,`300`));
listaProductos.push(new Producto(`9`,`Taza té`,`400`));
listaProductos.push(new Producto(`10`,`Maceta Mini`,`300`));
listaProductos.push(new Producto(`11`,`Maceta Mini Lisa`,`300`));
listaProductos.push(new Producto(`12`,`Hornito Aromático`,`450`));
listaProductos.push(new Producto(`13`,`Hornito Aromático`,`450`));

//Push de items al array de compra
//Cambiar los console.log por toast 
let items = document.getElementsByClassName(`imageZoom`)

let arrCompra = []
items[0].ondblclick = () =>{
    arrCompra.unshift(listaProductos[0].precio), console.log( `Agregue al carrito`)
}
items[1].ondblclick = () =>{
    arrCompra.unshift(listaProductos[1].precio)
}
items[2].ondblclick = () =>{
    arrCompra.unshift(listaProductos[2].precio)
}
items[3].ondblclick = () =>{
    arrCompra.unshift(listaProductos[3].precio)
}
items[4].ondblclick = () =>{
    arrCompra.unshift(listaProductos[4].precio)
}
items[5].ondblclick = () =>{
    arrCompra.unshift(listaProductos[5].precio)
}
items[6].ondblclick = () =>{
    arrCompra.unshift(listaProductos[6].precio)
}
items[7].ondblclick = () =>{
    arrCompra.unshift(listaProductos[7].precio)
}
items[8].ondblclick = () =>{
    arrCompra.unshift(listaProductos[8].precio)
}
items[9].ondblclick = () =>{
    arrCompra.unshift(listaProductos[9].precio)
}
items[10].ondblclick = () =>{
    arrCompra.unshift(listaProductos[10].precio)
}
items[11].ondblclick = () =>{
    arrCompra.unshift(listaProductos[11].precio)
}
items[12].ondblclick = () =>{
    arrCompra.unshift(listaProductos[12].precio)
}
items[13].ondblclick = () =>{
    arrCompra.unshift(listaProductos[13].precio)
}
let valorInicial = 0;
let sumaTotal = arrCompra.reduce((a,b) => a + b,
0);
console.log(sumaTotal);




/*const enLocalStorage = (key,value) =>{
    localStorage.setItem(key,value)
};


let carrito = []

//Agregar items al carrito

let items = document.getElementsByClassName(`imageZoom`)
items[0].ondblclick = () =>{carrito.push(new Producto(`0`,`Maceta Mini`, `500`)), console.log(`Se agregó Maceta Mini al carrito`)}
items[1].ondblclick = () =>{carrito.push(new Producto(`1`,`Mate  Kokeshi`,`450`)), console.log(`Se agregó Mate Kokeshi al carrito`)}
items[2].ondblclick = () =>{carrito.push(new Producto(`2`,`Mate Kokeshi Texturado Blanco`,`550`)), console.log(`Se agregó Mate Texturado Blanco al carrito`)}
items[3].ondblclick = () =>{carrito.push(new Producto(`3`,`Mate Kokeshi Texturado Aqua`,`500`)), console.log(`Se agregó Mate Texturado Aqua al carrito`)}
items[4].ondblclick = () =>{carrito.push(new Producto(`4`,`Mate Kokeshi Texturado Cuarzo`,`500`)), console.log(`Se agregó Mate Texturado Cuarzo al carrito`)}
items[5].ondblclick = () =>{carrito.push(new Producto(`5`,`Set tazas de té`,`650`)), console.log(`Se agregaron Tazas de té al carrito`)}
items[6].ondblclick = () =>{carrito.push(new Producto(`6`,`Carterterita Kokeshi`,`400`)), console.log(`Se agregó Carterita Kokeshi al carrito`)}
items[7].ondblclick = () =>{carrito.push(new Producto(`7`,`Maceta Mini Lisa`,`300`)), console.log(`Se agregó Maceta Mini Lisa al carrito`)}
items[8].ondblclick = () =>{carrito.push(new Producto(`8`,`Mate Kokeshi Liso`,`300`)), console.log(`Se agregó Matet Kokeshi Liso al carrito`)}
items[9].ondblclick = () =>{carrito.push(new Producto(`9`,`Taza té`,`400`)), console.log(`Se agregó Taza té al carrito`)}
items[10].ondblclick = () =>{carrito.push(new Producto(`10`,`Maceta Mini`,`300`)), console.log(`Se agregó Maceta Mini al carrito`)}
items[11].ondblclick = () =>{carrito.push(new Producto(`11`,`Maceta Mini Lisa`,`300`)), console.log(`Se agregó Maceta Lisa al carrito`)}
items[12].ondblclick = () =>{carrito.push(new Producto(`12`,`Hornito Aromático`,`450`)), console.log(`Se agregó Hornito Aromático al carrito`)}
items[13].ondblclick = () =>{carrito.push(new Producto(`13`,`Hornito Aromático`,`450`)), console.log(`Se agregó Hornito Aromático al carrito`)}



enLocalStorage(`carrito`, JSON.stringify(carrito))*/