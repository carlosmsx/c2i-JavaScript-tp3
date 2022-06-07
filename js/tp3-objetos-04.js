/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y 
precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(codigo, nombre, precio)
    {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos()
    {
        document.write(`<ul>`);
        document.write(`<li>código = ${this.codigo}</li>`);
        document.write(`<li>nombre = ${this.nombre}</li>`);
        document.write(`<li>precio = $${this.precio}</li>`);
        document.write(`</ul><hr>`);
    }
}

let productos=[];
productos.push(new Producto(111, "Mani 200g", 200));
productos.push(new Producto(112, "Coca Cola 2L Retornable", 220));
productos.push(new Producto(113, "Fernet Branca 75cl", 950));

productos.forEach((producto)=>{
    producto.imprimeDatos();
});
 