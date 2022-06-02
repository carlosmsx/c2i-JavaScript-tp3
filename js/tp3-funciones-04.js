/*
4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados 
del 1 al 10 del número elegido por el usuario.
*/

function tabladeMultiplicar(x)
{
    for (let i=1; i<=10; i++)
    {
        document.write(`${x} x ${i} = ${ x * i }<br>`);
    }
}

let numero = parseInt(prompt('Ingrese un número'));

if (!isNaN(numero))
{
    document.write(`La tabla de multiplicar de ${numero} es:<br><br>`);
    tabladeMultiplicar(numero);
}
else 
{
    document.write("Ingrese un número válido");
}