/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar 
la descripción del estado de la cuenta.
*/

class Cuenta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(cantidad) {
        this.saldo += cantidad;
    }

    extraer(cantidad) {
        this.saldo -= cantidad;
    }

    informar() {
        document.write(`<h3>Información de cuenta</h3>`);
        document.write(`Titular: ${ this.titular }<br>`);
        document.write(`Saldo: ${ this.saldo }<br>`);
        document.write(`<hr>`);
    }
}

let cuenta = new Cuenta("Alex", 0);
cuenta.informar();
cuenta.ingresar(20);
cuenta.informar();
cuenta.extraer(5);
cuenta.informar();