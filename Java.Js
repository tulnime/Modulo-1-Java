const boton = document.getElementById("botonConvertir");

boton.addEventListener("click", function(){

    const numero = Number(document.getElementById("number").value);

    const origen = document.getElementById("origen").value;

    const destino = document.getElementById("destino").value;

    let metros;
    let resultado;

    // Validación
    if(origen === destino){

        alert("Selecciona medidas distintas");
        return;

    }

    // Convertir a metros
    if(origen === "kilometro"){

        metros = numero * 1000 ;

    }

    else if(origen === "metros"){

        metros = numero ;

    }

    else if(origen === "centimetros"){

        metros = numero / 100 ;

    }

    else if(origen === "milimetros"){

        metros = numero / 1000 ;

    }

    // Convertir al destino
    if(destino === "kilometro"){

        resultado = metros / 1000 + " kilometros";

    }

    else if(destino === "metros"){

        resultado = metros + " metros";

    }

    else if(destino === "centimetros"){

        resultado = metros * 100 + " centrimetros";

    }

    else if(destino === "milimetros"){

        resultado = metros * 1000 + " milimetros";

    }

    alert("Resultado: " + resultado);

});