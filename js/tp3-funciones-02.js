/*
2- Definir una función que muestre información sobre una cadena de texto que se le pasa 
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena 
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

function analizarCadena(cadena)
{
    let hayMinusculas = false;
    let hayMayusculas = false;
    let resultado = "";

    for (let i=0; i<cadena.length; i++)
    {
        if (cadena[i]>='A' && cadena[i]<='Z') 
            hayMayusculas = true;
        else if (cadena[i]>='a' && cadena[i]<='z')
            hayMinusculas = true;
    }

    
    if (hayMayusculas && !hayMinusculas)
        resultado = "contiene sólo mayúsculas";
    else if (!hayMayusculas && hayMinusculas)
        resultado = "contiene sólo minúsculas";
    else if (hayMayusculas && hayMinusculas)
        resultado = "contiene una mezcla de mayúsculas y minúsculas";
    else 
        resultado = "no contiene letras!";
        
    return resultado;
}

let cadena = prompt('Ingrese una cadena');
document.write(`la cadena "${cadena}" ${ analizarCadena(cadena) }`);