/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona 
creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

*ver imagen en el campus

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Generacion
{
    constructor(nombre, anioDesde, anioHasta, poblacion, circunstanciaHistorica, rasgoCaracteristico)
    {
        this.nombre = nombre;
        this.anioDesde = anioDesde;
        this.anioHasta = anioHasta;
        this.poblacion = poblacion;
        this.circunstanciaHistorica = circunstanciaHistorica;
        this.rasgoCaracteristico = rasgoCaracteristico;
    }

    pertenece(anio)
    {
        if (anio >= this.anioDesde && anio <= this.anioHasta)
            return true;
        else
            return false;
    }

    mostrarDatos()
    {
        document.write(`<table border=1><tr><th>Generación</th><th>Rasgo característico</th></tr>`)
        document.write(`<tr><td>${this.nombre}</td><td>${this.rasgoCaracteristico}</td></tr></table>`);
    }
}

class Persona 
{
    constructor(nombre, edad, DNI, sexo, peso, altura, anio)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anio = anio;
    }

    mostrarGeneracion()
    {
        for (let i=0; i<generaciones.length; i++)
        {
            if (generaciones[i].pertenece(this.anio))
            {
                generaciones[i].mostrarDatos();
                break;
            }
        }
    }

    esMayorDeEdad()
    {
        let resultado = false;
        if (this.edad >=18 )
            resultado = true;
        return resultado;
    }

    mostrarDatos()
    {
        document.write(`<ul>`);
        for (let propiedad in this)
            document.write(`<li>${propiedad}: ${this[propiedad]}</li>`);
        document.write(`</ul>`);
    }

    generarDNI()
    {
        let dniGenerado = Math.floor(Math.random()*9) + 1; //solo el primer elemento se elige entre 1 y 9
        for (let i=1; i<8; i++) //geneoro el resto de numeros
        {
            dniGenerado *= 10;
            dniGenerado += Math.floor(Math.random()*10); //cualquier numero entre 0 y 9
        }
        document.write(`DNI generado=${dniGenerado}<br>`);
    }
}

let generaciones = [];
generaciones.push(new Generacion("Generación Z", 1994, 2010, 7800000, "Expansión masiva de internet", "Irreverencia"));
generaciones.push(new Generacion("Generación Y<br><i>millenials</i>", 1981, 1993, 7200000, "Inicio de la digitalización", "Frustración"));
generaciones.push(new Generacion("Generación X", 1969, 1980, 9300000, "Crisis del 73 y transición Española", "Obsesión por el éxito"));
generaciones.push(new Generacion("Baby Boom", 1949, 1968, 12200000, "Paz y explosión demográfica", "Ambición"));
generaciones.push(new Generacion("<i>Silent Generation</i><br>Los niños de la postguerra", 1930, 1948, 6300000, "Conflictos bélicos", "Austeridad"));

let personas = [];
personas.push(new Persona("Chechu", 70, 6004033, "M", 58, 1.60, 1933));
personas.push(new Persona("Carlos", 48, 23157174, "H", 80, 1.72, 1973));
personas.push(new Persona("Maca", 40, 15615615, "M", 54, 1.68, 1981));
personas.push(new Persona("Rena", 30, 3332332, "M", 60, 1.67, 1991));
personas.push(new Persona("Fede", 20, 43344344, "H", 64, 1.64, 2001));
personas.push(new Persona("Ale", 3, 3232323, "H", 17, 1, 2015));

personas.forEach(persona => {
    persona.mostrarDatos();
    persona.mostrarGeneracion();
    if (persona.esMayorDeEdad())
        document.write('*es mayor de edad<br>');
    persona.generarDNI()
    document.write('<hr>')
})
