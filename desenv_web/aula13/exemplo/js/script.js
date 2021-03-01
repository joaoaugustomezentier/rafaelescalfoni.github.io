$(function(){ //document.ready
    var url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json";
    $.get(url, function(data){
        console.log(data);
        //jQuery.each(array, function(indice, obj))
        $.each(data, function(index, receita){
            let $divReceita = criarReceita(receita.nome, receita.descricao, receita.foto, receita.ingredientes, receita.preparo)
            $("main").append($divReceita);
        })
    });
})
// hoisting "içamento"
function criarReceita(titulo, descricao, foto, ingredientes, preparo){
    //criando uma div.receita
    let $receita = $("<div>").addClass("receita");
    let $figure = $("<figure>")
                    .append($("<img>")
                        .attr("src", foto)
                        .attr("alt", titulo)
                    )
                    .append($("<figcaption>").text(titulo));

    let $titulo = $("<h3>").text(titulo);
    let $descricao = $("<p>").text(descricao);
    let $listaIngredientes = $("<ul>");
    let $listaPreparo = $("<ol>");
    $.each(ingredientes, function(index, item){
        $listaIngredientes.append($("<li>").text(item))
    });
    $.each(preparo, function(index, item){
        $listaPreparo.append($("<li>").text(item))
    });
    $receita.append($figure);
    $receita.append($titulo);
    $receita.append($descricao);
    $receita.append($("<h4>").text("Ingredientes"));
    $receita.append($listaIngredientes);
    $receita.append($("<h4>").text("Preparo"));
    $receita.append($listaPreparo);
    return $receita;
}
