function calcular_prestamo( monto , cuotas ){

    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);

    let prestamo = 0;   

    if( monto > 0 && cuotas == 1){
        prestamo = monto + (monto * 0.10)
        return prestamo
    }
    else if( monto > 0 && cuotas == 3){
        prestamo = monto + (monto * 0.20)
        return prestamo
    }
    else if( monto > 0 && cuotas == 6){
        prestamo = monto + (monto * 0.30)
        return prestamo
    }
    else if( monto > 0 && cuotas == 12){
        prestamo = monto + (monto * 0.50)
        return prestamo
    }
}

function es_socio( prestamo, estado_ususario){

    if( estado_ususario == "SI"){
        
        let descuento = prestamo * 0.05;
        return descuento
    }
    else{
        return 0
    }

}

console.log( "Bienvenido/a El Prestamista");

let monto = "";

while( monto != "SALIR"){

    monto = prompt("Ingrese el monto que desea o ingrese SALIR para finalizar");

    if( monto != "SALIR"){
        let estado_ususario  = prompt("Es socio: SI o NO");
        let cuotas = prompt("En cuantas cuotas quiere financiar su préstamo: 1, 3 , 6 o 12");
        
        
        let prestamo_total = calcular_prestamo( monto, cuotas );
        let resultado_desc = es_socio( prestamo_total , estado_ususario ); 

        console.log("Datos del préstamo");
        console.log("Usted solicitó: " ,monto);
        console.log("Cantidad de cuotas: " ,cuotas);
        console.log("Total a pagar: ", prestamo_total);
        console.log("Bonificación por Socio: ", resultado_desc);
        console.log("Monto Final: ", prestamo_total - resultado_desc);
    }
}

