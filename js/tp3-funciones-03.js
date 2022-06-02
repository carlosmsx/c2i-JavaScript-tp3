/*
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/

function perimetro(a, b)
{
    return 2 * ( a + b );
}

let a = parseInt(prompt('Ingrese lado "a"'));
if (a!=null && !isNaN(a))
{
    let b = parseInt(prompt('Ingrese lado "b"'));
    if (b!=null && !isNaN(b))
    {
        document.write(`el perímetro para a=${a} y b=${b} es ${ perimetro(a,b) }`);
    }
    else
    {
        document.write("debe ingresar un valor numérico para el lado 'b'");
    }
}
else
{
    document.write("debe ingresar un valor numérico para el lado 'a'");
}

