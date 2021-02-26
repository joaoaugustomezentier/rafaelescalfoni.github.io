$(function(){
    var url = "https://rafaelescalfoni.net/receitas.php";
    $.get(url, function(data){
        console.log(data);
    });
})