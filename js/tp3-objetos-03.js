/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para 
modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    set setAlto(alto)
    {
        this.alto = alto;
    }

    set setAncho(ancho)
    {
        this.ancho = ancho;
    }

    get getAlto() 
    {
        return this.alto;
    }

    get getAncho()
    {
        return this.ancho;
    }

    perimetro()
    {
        return 2*(this.ancho + this.alto);
    }

    area()
    {
        return this.alto * this.ancho;
    }

    mostrar()
    {
        document.write(`alto = ${this.getAlto}<br>ancho = ${this.getAncho}<br>`);
    }
}

let rectangulos=[];
rectangulos.push( new Rectangulo( 2, 5) );
rectangulos.push( new Rectangulo( 3, 5) );
rectangulos.push( new Rectangulo( 4, 5) );
rectangulos.push( new Rectangulo( 6, 5) );
rectangulos.push( new Rectangulo( 7, 5) );

for (let i=0; i<rectangulos.length; i++)
{
    rectangulos[i].mostrar();
    document.write(`perímetro=${ rectangulos[i].perimetro() }<br>`);
    document.write(`área=${ rectangulos[i].area() }<hr>`);
}

document.write(`modificacion de propiedades<br>`)
rectangulos[0].setAncho = 9;
rectangulos[0].setAlto = 8;
rectangulos[0].mostrar();