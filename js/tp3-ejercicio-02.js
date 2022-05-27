let ciudades = []

//ingreso ciudades por prompt
while(true)
{
    let ciudad = prompt('ingrese una ciudad o cancele para terminar')
    if (ciudad==null)
        break;
    ciudades.push(ciudad)
}

// listo todos los elementos
for (let i=0; i<ciudades.length; i++)
{   
    document.write(`${ciudades[i]}<br>`)
}

document.write('<hr>')

// Mostrar la longitud del arreglo
document.write(`Longitud del arreglo: ${ciudades.length}<br>`)

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(`Primer elemento: ${ciudades[0]}<br>`)
document.write(`Tercer elemento: ${ciudades[2]}<br>`)
document.write(`Ultimo elemento: ${ciudades[ciudades.length-1]}<br>`)

// Añade en última posición la ciudad de París.
ciudades.push('Paris')

// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`Segundo elemento: ${ciudades[1]}<br>`)

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = 'Barcelona'

// listo todos los elementos
document.write('<hr>')
for (let i=0; i<ciudades.length; i++)
{   
    document.write(`${ciudades[i]}<br>`)
}
