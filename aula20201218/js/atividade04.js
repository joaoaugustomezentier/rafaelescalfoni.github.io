$(function(){
    
    $("#buscaEndereco").click(function(){
        var url = "https://viacep.com.br/ws/"
        var cep = "" //pegar do input;
        url += cep + "/json/";

        $.get(url, function(data, status){
            //programa para carregar o endereço na página;
            console.log(data);
        })
    })
    
})