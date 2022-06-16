/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.
*/

class Contacto 
{
    constructor(nombre, telefono)
    {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    get getNombre() { return this.nombre; }
    get getTelefono() { return this.telefono; }
}

class Agenda
{
    constructor(tamanio)
    {
        this.tamanio = tamanio;
        this.contactos = [];
    }

    //Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
    aniadirContacto(contacto) 
    {
        if (this.agendaLlena() == false)
        {
            this.contactos.push(contacto);
        }
        else
        {
            //alert("No se pueden añadir mas contactos.");
            document.write(`No se pueden añadir mas contactos.<br>`);
        }
    }
    
    //indica si el contacto pasado existe o no.
    existeContacto(contacto)
    {
        return this.buscarContacto(contacto.nombre) != undefined;
    }

    //Lista toda la agenda
    listarContactos()
    {
        this.contactos.forEach(contacto => {
            document.write(`nombre: ${contacto.getNombre} (${contacto.getTelefono})<br>`);
        })
    }

    //busca un contacto por su nombre y muestra su teléfono.
    buscarContacto(nombre)
    {
        return this.contactos.find(contacto => contacto.getNombre == nombre)
    }

    //elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
    eliminarContacto(contacto)
    {

    }

    //indica si la agenda está llena.
    agendaLlena()
    {
        return this.tamanio == this.contactos.length;
    }

    //indica cuántos contactos más podemos ingresar.
    huecosLibres()
    {
        return this.tamanio - this.contactos.length;
    }
}

let agenda = new Agenda(2);

agenda.aniadirContacto(new Contacto("carlos", "123456"));
agenda.aniadirContacto(new Contacto("Alejandro", "3232323"));
agenda.aniadirContacto(new Contacto("fede", "442341"));

let contacto = agenda.buscarContacto("Alejandro");
console.log(contacto);

agenda.listarContactos();
document.write(`Agenda llena? ${agenda.agendaLlena()}<br>`);
document.write(`Huecos libres: ${agenda.huecosLibres()}<br>`);
document.write(`Existe contacto? ${agenda.existeContacto(contacto)}<br>`)

