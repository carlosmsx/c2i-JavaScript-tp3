/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro 
{
    constructor(ISBN, titulo, autor, numeroDePaginas)
    {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
    }

    get getISBN()
    {
        return this.ISBN;
    }

    get getTitulo()
    {
        return this.titulo;
    }

    get getAutor()
    {
        return this.autor;
    }

    get getNumeroDePaginas()
    {
        return this.numeroDePaginas;
    }

    set setISBN(ISBN)
    {
        this.ISBN = ISBN;
    }
    
    set setTitulo(titulo)
    {
        this.titulo = titulo;
    }
    
    set setAutor(autor)
    {
        this.autor = autor;
    }
    
    set setNumeroDePaginas(numeroDePaginas)
    {
        this.numeroDePaginas = numeroDePaginas;
    }

    mostrarLibro()
    {
        document.write(`El libro "${this.titulo}" con ISBN ${this.ISBN} creado por el autor "${this.autor}" tiene ${this.numeroDePaginas} páginas<br>`);
    }
}

let libros = [];
libros.push(new Libro(1122334455, "Soy Roca", "Felix Luna", 234));
libros.push(new Libro(2266337744, "Contacto", "Carl Sagan", 378));
libros.push(new Libro(6622443399, "El amor en los tiempos del cólera", "Gabriel García Márquez", 490));
libros.push(new Libro(6622443399, "Cosmos", "Carl Sagan", 365));

let maxNumeroDePaginas = 0;
let indiceDelQueTieneMasPaginas = 0;

libros.forEach((libro, index) => {
    libro.mostrarLibro();
    if (libro.getNumeroDePaginas > maxNumeroDePaginas)
    {
        maxNumeroDePaginas = libro.getNumeroDePaginas;
        indiceDelQueTieneMasPaginas = index;
    }
});

document.write(`<br>El libro que tiene mas páginas es "${ libros[ indiceDelQueTieneMasPaginas ].getTitulo }"`);