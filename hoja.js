        //Semana 1 de Fuerza
       //Lunes
/*Back Squat
 5x8 al 74%
 4x6 al 80%
 3x4 al 90%
 */


    function porcentajes_back_squat(back_rm){

        let porcentaje_74 = back_rm * 0.74 ;
        let porcentaje_80 = back_rm * 0.80 ;
        let porcentaje_90 = back_rm * 0.90 ;
        console.log("5 series de 8 repeticiones con", porcentaje_74);
        console.log ("4 series de 6 repeticiones con", porcentaje_80);
        console.log ("3 series de 4 repeticiones con ", porcentaje_90); 


    }
    
    let rm_back = parseFloat (prompt("Ingrese su RM de Back Squat en KG"))
    porcentajes_back_squat(rm_back);






