function eVogal(caracter){
    caracter = caracter.toUpperCase();
    if (caracter == "A" || caracter == "E" || caracter == "I" || caracter == "O" || caracter == "U")
        return true;
    return false;
}
$(function(){
    $("#inverter").click(function(){
        let frase = $("#frase1").val();
        let resultado = "";
        /*
            script para inverter a frase    
        */
        $("#resultado1").text(resultado);
    })

    $("#executa2").click(function(){
        let frase = $("#frase2").val();
        for(i=0; i<frase.length; i++){
            let caracter = frase[i];
            if(eVogal(caracter)){
                // seu codigo aqui
            }
        }

    })
})