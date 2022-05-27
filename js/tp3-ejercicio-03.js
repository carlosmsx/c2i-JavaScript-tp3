//dados

//los valores posibles de las sumas son entre 2 y 12, asi que reservo un array de 11 elementos inicializados en 0
let freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i=0; i<50; i++)
{
    let dado1 = Math.floor(Math.random()*6)+1;
    let dado2 = Math.floor(Math.random()*6)+1;
    let suma = dado1 + dado2;

    document.write(`dado1=${dado1}  dado2=${dado2}  suma=${suma}<br>`);

    //el indice del vector lo obtengo de restar 2 a suma para que empiece desde 0. recordar que los valores posibles estan entre 2 y 12
    freq[suma-2]++;
}

document.write("<hr>");
console.log(freq)
for (let i=0; i<freq.length; i++)
{
    //uso esta variable auxiliar solo para poner correctamente 'vez' o 'veces' segun corresponda
    let veces = 'veces';

    if (freq[i]==1) 
        veces = 'vez';

    document.write(`resultado con suma=${i+2} aparece ${freq[i]} ${veces}<br>`);
}