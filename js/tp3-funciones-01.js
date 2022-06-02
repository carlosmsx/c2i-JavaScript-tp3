/*
1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como 
resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado 
devuelto por la función.
*/

function paridad(x)
{
    let resultado = "";
    if (x%2==0)
        resultado = "par"
    else
        resultado = "impar"
    return resultado;
}

for (let i=0; i<20; i++)
{
    document.write(`el número ${i} es ${paridad(i)}<br>`);
}