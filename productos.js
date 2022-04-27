
//Constructor
class Producto{
    constructor(id,item,precio,imagen){
        this.id = id;
        this.item = item;
        this.precio = precio;
        this.imagen = imagen;
    }
    sumaIva () {
        this.precio = this.precio * 1.21;
    };
}
//Productos
//Push de items al array de compra  y carrito con sus calls
const listaProductos = []
listaProductos.push(new Producto(0,`Maceta Mini`,500,`../img/imagen5.png`));
listaProductos.push(new Producto(1,`Mate  Kokeshi`,450,`../img/imagen6.png`));
listaProductos.push(new Producto(2,`Mate Kokeshi Texturado Blanco`,550,`../img/imagen8.png`));
listaProductos.push(new Producto(3,`Mate Kokeshi Texturado Aqua`,500,`../img/imagen9.png`));
listaProductos.push(new Producto(4,`Mate Kokeshi Texturado Cuarzo`,500,`../img/imagen11.png`));
listaProductos.push(new Producto(5,`Set tazas de té`,650,`../img/imagen12.png`));
listaProductos.push(new Producto(6,`Carterterita Kokeshi`,400,`../img/imagen14.png`));
listaProductos.push(new Producto(7,`Maceta Mini Lisa`,300,`../img/imagen16.png`));
listaProductos.push(new Producto(8,`Mate Kokeshi Liso`,300,`../img/imagen17.png`));
listaProductos.push(new Producto(9,`Taza té`,400, `../img/imagen7.png`));
listaProductos.push(new Producto(10,`Maceta Mini`,300,`../img/imagen10.png`));
listaProductos.push(new Producto(11,`Maceta Mini Lisa`,300,`../img/imagen13.png`));
listaProductos.push(new Producto(12,`Hornito Aromático`,450,`../img/imagen18.png`));
listaProductos.push(new Producto(13,`Hornito Aromático`,450, `../img/imagen19.png`));

let carrito =[];
const pesos = `$`;
const DOMitems= document.getElementById(`main`)
const DOMcarrito= document.getElementById(`carrito`)
const DOMtotal= document.getElementById(`total`)
const DOMbtnVaciar= document.getElementById(`btn-vaciar`)
const miLocalStorage= window.localStorage;

//Funciones
function crearProductos() {
    listaProductos.forEach((info)=>{
        //Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card');
        //NodoMain
        const nodoSection = document.createElement(`section`)
        nodoSection.classList.add(`container`)
        //Titulo
        const nodoTitulo = document.createElement (`card-header-center`);
        nodoTitulo.classList.add(`card-title`);
        nodoTitulo.textContent = info.item;
        //Imagenes
        const nodoImagenes = document.createElement(`img`);
        nodoImagenes.classList.add(`img-fluid`);
        nodoImagenes.classList.add(`card-img-top`)
        nodoImagenes.setAttribute(`src`,info.imagen);
        //Precio
        const nodoPrecio = document.createElement(`p`);
        nodoPrecio.classList.add(`card-text-center`);
        nodoPrecio.textContent = `${info.precio}${pesos}`;
        //Boton
        const nodoBoton = document.createElement(`button`);
        nodoBoton.classList.add(`btn`,`btn-primary`);
        nodoBoton.textContent = `Agregar al Carrito`;
        nodoBoton.setAttribute(`marcador`, info.id);
        nodoBoton.addEventListener(`click`,agregarAlCarrito);
        //Agregar al NODO
        nodoSection.appendChild(nodoImagenes);
        nodoSection.appendChild(nodoTitulo);
        nodoSection.appendChild(nodoPrecio);
        nodoSection.appendChild(nodoBoton);
        miNodo.appendChild(nodoSection);
        DOMitems.appendChild(miNodo);
    });
}
//Funcion Agregar items al carrito
function agregarAlCarrito(e){
    carrito.push(e.target.getAttribute(`marcador`))
    crearCarrito()
    guardarCarritoLocalStorage()
}

function crearCarrito(){
    DOMcarrito.textContent=``;

    const carritoSinDuplicar = [...new Set(carrito)];
    carritoSinDuplicar.forEach((item)=>{
        const miItem = listaProductos.filter((itemListaProductos)=>{
            return itemListaProductos.id == parseInt(item);
        });
        //Cantidad de veces que se repite el producto
        const numeroUnidades = carrito.reduce((total,itemId)=>{
            return itemId === item ? total+=1 : total;
        }, 0);
    
    // Crear lista de carrito
    const miNodo = document.createElement(`li`);
    miNodo.classList.add(`list-grup-item`,`text-right`);
    miNodo.textContent = `${numeroUnidades} x ${miItem[0].item} - ${miItem[0].precio}${pesos}`;
    //Boton borrar
    const botonBorrar = document.createElement(`button`);
    botonBorrar.classList.add(`bntn`,`btn-danger`);
    botonBorrar.textContent= ``;
    botonBorrar.style.marginLeft = `16px`;
    botonBorrar.dataset.item = item;
    botonBorrar.addEventListener(`click`,borrarItemCarrito);
    //
    //
    miNodo.appendChild(botonBorrar);
    DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = calcularTotal();
}
//Evento borrar
function borrarItemCarrito(e){
    const id =e.target.dataset.item;
    carrito = carrito.filter((carritoId)=>{
        return carritoId !==id;
    });
    crearCarrito();

    guardarCarritoLocalStorage();
}
//Calcular total a pagar
function calcularTotal(){
    return carrito.reduce((total,item)=>{
        const miItem = listaProductos.filter((listaProductos)=>{
            return listaProductos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    },0).toFixed(2);
}
//vaciar el carrito
function vaciarCarrito(){
    carrito = [];
    crearCarrito()
    localStorage.clear();
}
//LocalStorage

function guardarCarritoLocalStorage(){
    miLocalStorage.setItem(`carrito`, JSON.stringify(carrito));
}

function cargarCarritoEnLocalStorage(){
    if(miLocalStorage.getItem(`carrito`) !== null){//Ver si habia uno previamente
        //Guardarlos
        carrito = JSON.parse(miLocalStorage.getItem(`carrito`));
    }
}
//evento vaciar
DOMbtnVaciar.addEventListener(`click`, vaciarCarrito);
//
cargarCarritoEnLocalStorage();  
crearProductos();
crearCarrito();