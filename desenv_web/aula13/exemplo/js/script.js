$(function(){
    var url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json";
    $.get(url, function(data){
        console.log(data);
        $.each(data, function(index, receita){
            criarReceita(receita.titulo, receita.foto, receita.ingredientes, receita.preparo)
        })
    });
})

function criarReceita(titulo, foto, ingredientes, preparo){
    //criando uma div.receita
    let $receita = $("<div>").addClass("receita");
    let $figure = $("<figure>")
                    .append($("<img>")
                        .attr("src", foto)
                        .attr("alt", titulo)
                    )
                    .append($("<figcaption>").text(titulo))
    let $titulo = $("<h3>").text(titulo);
    let $listaIngredientes = $("ul");
    let $listaPreparo = $("<ol>");
    $.each(ingredientes, function(index, item){
        $listaIngredientes.append($("<li>").text(item))
    });
    $.each(preparo, function(index, item){
        $listaPreparo.append($("<li>").text(item))
    });
    $receita.append($figure);
    $receita.append($titulo);
    $receita.appent($("<h4>").text("Ingredientes"));
    $receita.append($listaIngredientes);
    $receita.append($("<h4>").text("Preparo"));
    $receita.append($listaPreparo);
}
