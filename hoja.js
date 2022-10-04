/*Contador deposito autos 0km en fabrica disponibles  y valor total del deposito en la medida en la que van 
ingresando los autos al deposito,
 el deposito tiene un limite de 500 autos y cada auto tiene un valor de 12.000 usd

*/

let contador_autos = 0 ;

while (contador_autos < 500){

    let numero = parseInt(prompt("Ingrese cantidad de autos"));
    

    contador_autos= contador_autos + numero

    let espacio_disonible = 500 - contador_autos
    
    console.log("Se ocuparon :" , contador_autos);

    console.log("Se encuentra disponibles :" , espacio_disonible);
    console.log("El valor del deposito hasta el momento son : ", (contador_autos*12000));
}


